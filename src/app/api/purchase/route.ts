import { NextResponse } from "next/server";
import { WHATSAPP_NUMBER } from "@/i18n/static";

export const runtime = "nodejs";

interface PurchaseBody {
  planName?: string;
  name?: string;
  phone?: string;
  goal?: string;
  locale?: "ru" | "tj";
}

interface GreenSendResult {
  ok: boolean;
  status: number;
  idMessage?: string;
  raw?: unknown;
  quotaExceeded?: boolean;
}

function normalizePhone(phone: string): string | null {
  let digits = phone.replace(/\D/g, "");
  if (!digits) return null;
  if (digits.startsWith("00")) digits = digits.slice(2);
  if (digits.startsWith("992") && digits.length >= 12) return digits.slice(0, 12);
  if (digits.length === 9) return `992${digits}`;
  if (digits.length >= 11 && digits.length <= 15) return digits;
  return null;
}

/**
 * Message as if the client wrote it (Instagram DM style).
 * Delivered into THAT person's WhatsApp chat — not "Message to yourself".
 */
function buildClientChatMessage(payload: {
  planName: string;
  name: string;
  goal: string;
  locale: "ru" | "tj";
}) {
  const { planName, name, goal, locale } = payload;

  if (locale === "ru") {
    return [
      "Салом! 👋",
      "",
      "Я с сайта *PROSMM*.",
      `Хочу тариф: *${planName}*`,
      "",
      `👤 Меня зовут: *${name}*`,
      `🎯 Цель: ${goal}`,
      "",
      "Напишите мне, пожалуйста 🙏",
    ].join("\n");
  }

  return [
    "Салом! 👋",
    "",
    "Ман аз сайти *PROSMM* омадам.",
    `Мехоҳам тариф: *${planName}*`,
    "",
    `👤 Номам: *${name}*`,
    `🎯 Ҳадаф: ${goal}`,
    "",
    "Лутфан ҷавоб диҳед 🙏",
  ].join("\n");
}

function isQuotaError(data: unknown): boolean {
  const text = JSON.stringify(data ?? {});
  return (
    text.includes("QUOTE_ALLOWED") ||
    text.includes("CORRESPONDENTS_QUOTE") ||
    text.includes("quota has been exceeded") ||
    text.includes("Monthly quota")
  );
}

async function checkWhatsAppChatId(
  apiUrl: string,
  idInstance: string,
  apiToken: string,
  phoneDigits: string,
): Promise<string | null> {
  try {
    const response = await fetch(`${apiUrl}/waInstance${idInstance}/checkWhatsapp/${apiToken}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNumber: Number(phoneDigits), force: true }),
    });
    const data = (await response.json().catch(() => null)) as {
      existsWhatsapp?: boolean;
      chatId?: string;
    } | null;

    if (!response.ok || !data?.existsWhatsapp || !data.chatId) return null;
    return data.chatId;
  } catch {
    return null;
  }
}

async function sendGreenMessage(
  apiUrl: string,
  idInstance: string,
  apiToken: string,
  chatId: string,
  message: string,
): Promise<GreenSendResult> {
  try {
    const response = await fetch(`${apiUrl}/waInstance${idInstance}/sendMessage/${apiToken}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chatId,
        message,
        linkPreview: false,
      }),
    });

    const data = await response.json().catch(() => null);
    const quotaExceeded = response.status === 466 || isQuotaError(data);

    if (!response.ok) {
      return { ok: false, status: response.status, raw: data, quotaExceeded };
    }

    const idMessage =
      data && typeof data === "object" && "idMessage" in data
        ? String((data as { idMessage?: string }).idMessage ?? "")
        : undefined;

    return { ok: true, status: response.status, idMessage, raw: data };
  } catch {
    return { ok: false, status: 502, quotaExceeded: false };
  }
}

export async function POST(request: Request) {
  const idInstance = process.env.GREEN_API_ID_INSTANCE?.trim();
  const apiToken = process.env.GREEN_API_TOKEN_INSTANCE?.trim();
  const apiUrl = (process.env.GREEN_API_URL ?? "https://7107.api.green-api.com").replace(/\/$/, "");
  const ownerPhone =
    normalizePhone(process.env.GREEN_API_NOTIFY_PHONE ?? WHATSAPP_NUMBER) ?? "992100944545";

  if (!idInstance || !apiToken) {
    return NextResponse.json({ error: "WhatsApp API is not configured" }, { status: 503 });
  }

  let body: PurchaseBody;
  try {
    body = (await request.json()) as PurchaseBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const planName = body.planName?.trim() ?? "";
  const name = body.name?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const goal = body.goal?.trim() ?? "";
  const locale = body.locale === "ru" ? "ru" : "tj";

  if (planName.length < 2 || name.length < 2 || phone.length < 6 || goal.length < 2) {
    return NextResponse.json(
      {
        error:
          locale === "ru"
            ? "Заполните все поля корректно"
            : "Ҳамаи майдонҳоро дуруст пур кунед",
      },
      { status: 400 },
    );
  }

  const clientPhone = normalizePhone(phone);
  if (!clientPhone || clientPhone.length < 11) {
    return NextResponse.json(
      {
        error:
          locale === "ru"
            ? "Введите номер WhatsApp, например 90 123 45 67"
            : "Рақами WhatsApp-ро нависед, масалан 90 123 45 67",
      },
      { status: 400 },
    );
  }

  const message = buildClientChatMessage({ planName, name, goal, locale });

  // Open chat with THAT client (like Instagram DM) — not "Message to yourself"
  const clientChatId =
    (await checkWhatsAppChatId(apiUrl, idInstance, apiToken, clientPhone)) ??
    `${clientPhone}@c.us`;

  let result = await sendGreenMessage(apiUrl, idInstance, apiToken, clientChatId, message);

  // Fallback if Developer quota blocks new numbers — still notify owner
  if (!result.ok) {
    const fallback = [
      locale === "ru" ? "🔔 Заявка с сайта (клиентский чат недоступен)" : "🔔 Заявка аз сайт (чати мизоҷ дастнорас)",
      "",
      `👤 ${name}`,
      `📦 ${planName}`,
      `📱 +${clientPhone}`,
      `🎯 ${goal}`,
      "",
      `💬 https://wa.me/${clientPhone}`,
    ].join("\n");

    result = await sendGreenMessage(
      apiUrl,
      idInstance,
      apiToken,
      `${ownerPhone}@c.us`,
      fallback,
    );
  }

  if (!result.ok) {
    const quotaHint =
      locale === "ru"
        ? "Лимит Green API. Смените тариф на Business в console.green-api.com — тогда чат откроется с каждым клиентом."
        : "Лимити Green API. Тарифи Business гиред дар console.green-api.com — он гоҳ бо ҳар мизоҷ чат кушода мешавад.";

    return NextResponse.json(
      {
        error: result.quotaExceeded
          ? quotaHint
          : locale === "ru"
            ? "Не удалось отправить. Проверьте номер WhatsApp."
            : "Фиристода нашуд. Рақами WhatsApp-ро санҷед.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    idMessage: result.idMessage ?? null,
  });
}
