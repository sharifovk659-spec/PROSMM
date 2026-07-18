import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface PurchaseBody {
  planName?: string;
  name?: string;
  phone?: string;
  goal?: string;
  locale?: "ru" | "tj";
}

/** Normalize to international digits (992…) for Green API chatId. */
function normalizePhone(phone: string): string | null {
  let digits = phone.replace(/\D/g, "");
  if (!digits) return null;
  if (digits.startsWith("00")) digits = digits.slice(2);
  if (digits.startsWith("992") && digits.length >= 12) return digits;
  // Local TJ mobile: 9 digits
  if (digits.length === 9) return `992${digits}`;
  // Already full international without +
  if (digits.length >= 10 && digits.length <= 15) return digits;
  return null;
}

function toChatId(digits: string) {
  return `${digits}@c.us`;
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
  goal: string;
  locale: "ru" | "tj";
}) {
  const { planName, name, phoneDisplay, goal, locale } = payload;

  if (locale === "ru") {
    return [
      "✨ *PROSMM*",
      "",
      `Салом, *${name}*! 👋`,
      "Ваша заявка принята.",
      "",
      "📦 *Тариф*",
      planName,
      "",
      `👤 ${name}`,
      `📱 ${phoneDisplay}`,
      `🎯 ${goal}`,
      "",
      "————————————",
      "Мы скоро свяжемся с вами 🧡",
    ].join("\n");
  }

  return [
    "✨ *PROSMM*",
    "",
    `Салом, *${name}*! 👋`,
    "Дархости шумо қабул шуд.",
    "",
    "📦 *Тариф*",
    planName,
    "",
    `👤 ${name}`,
    `📱 ${phoneDisplay}`,
    `🎯 ${goal}`,
    "",
    "————————————",
    "Ба зудӣ бо шумо тамос мегирем 🧡",
  ].join("\n");
}

export async function POST(request: Request) {
  const idInstance = process.env.GREEN_API_ID_INSTANCE?.trim();
  const apiToken = process.env.GREEN_API_TOKEN_INSTANCE?.trim();
  const apiUrl = (process.env.GREEN_API_URL ?? "https://7107.api.green-api.com").replace(/\/$/, "");

  if (!idInstance || !apiToken) {
    return NextResponse.json(
      { error: "WhatsApp API is not configured" },
      { status: 503 },
    );
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
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const phoneDigits = normalizePhone(phone);
  if (!phoneDigits) {
    return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
  }

  // Send TO the client's number → separate chat in owner's WhatsApp (not "Вы")
  const chatId = toChatId(phoneDigits);
  const message = buildLeadMessage({
    planName,
    name,
    phoneDisplay: formatDisplayPhone(phoneDigits),
    goal,
    locale,
  });
  const endpoint = `${apiUrl}/waInstance${idInstance}/sendMessage/${apiToken}`;

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chatId,
        message,
        linkPreview: false,
      }),
    });

    const data = (await upstream.json().catch(() => null)) as { idMessage?: string; message?: string } | null;

    if (!upstream.ok) {
      return NextResponse.json(
        { error: data?.message ?? "Failed to send WhatsApp message" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, idMessage: data?.idMessage ?? null, chatId });
  } catch {
    return NextResponse.json({ error: "WhatsApp request failed" }, { status: 502 });
  }
}
