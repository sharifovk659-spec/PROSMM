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

function formatDisplayPhone(digits: string) {
  if (digits.startsWith("992") && digits.length === 12) {
    return `+992 ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9)}`;
  }
  return `+${digits}`;
}

function buildLeadMessage(payload: {
  planName: string;
  name: string;
  phoneDisplay: string;
  phoneDigits: string;
  goal: string;
  locale: "ru" | "tj";
}) {
  const { planName, name, phoneDisplay, phoneDigits, goal, locale } = payload;
  const waLink = `https://wa.me/${phoneDigits}`;

  if (locale === "ru") {
    return [
      "🔔 *Уведомление с сайта PROSMM*",
      "",
      "Новая заявка от клиента:",
      "",
      `👤 *Имя:* ${name}`,
      `📦 *Тариф:* ${planName}`,
      `📱 *Телефон:* ${phoneDisplay}`,
      `🎯 *Цель:* ${goal}`,
      "",
      "————————————",
      `💬 Написать клиенту: ${waLink}`,
    ].join("\n");
  }

  return [
    "🔔 *Огоҳӣ аз сайти PROSMM*",
    "",
    "Заявкаи нав аз мизоҷ:",
    "",
    `👤 *Ном:* ${name}`,
    `📦 *Тариф:* ${planName}`,
    `📱 *Телефон:* ${phoneDisplay}`,
    `🎯 *Ҳадаф:* ${goal}`,
    "",
    "————————————",
    `💬 Ба мизоҷ нависед: ${waLink}`,
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

  // Owner WhatsApp — always deliver here so they see the lead on their phone
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

  const message = buildLeadMessage({
    planName,
    name,
    phoneDisplay: formatDisplayPhone(clientPhone),
    phoneDigits: clientPhone,
    goal,
    locale,
  });

  // Always to owner's WhatsApp (992100944545). Never to the client.
  // On the same linked number this appears in "Избранное / Вы" — but the owner always sees it.
  const ownerChatId = `${ownerPhone}@c.us`;
  const result = await sendGreenMessage(apiUrl, idInstance, apiToken, ownerChatId, message);

  if (!result.ok) {
    const quotaHint =
      locale === "ru"
        ? "Лимит Green API (тариф Developer). Откройте console.green-api.com и смените тариф на Business."
        : "Лимити Green API (тарифи Developer). Дар console.green-api.com тарифи Business гиред.";

    return NextResponse.json(
      {
        error: result.quotaExceeded
          ? quotaHint
          : locale === "ru"
            ? "Не удалось отправить уведомление. Попробуйте снова."
            : "Огоҳӣ фиристода нашуд. Дубора кӯшиш кунед.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    idMessage: result.idMessage ?? null,
  });
}
