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

function buildLeadMessage(payload: Required<Pick<PurchaseBody, "planName" | "name" | "phone" | "goal">> & { locale: "ru" | "tj" }) {
  const { planName, name, phone, goal, locale } = payload;

  if (locale === "ru") {
    return [
      "🔥 *НОВАЯ ЗАЯВКА — PROSMM*",
      "━━━━━━━━━━━━━━━━",
      "",
      `📦 *Тариф:* ${planName}`,
      `👤 *Имя:* ${name}`,
      `📱 *Телефон:* ${phone}`,
      `🎯 *Цель:* ${goal}`,
      "",
      "━━━━━━━━━━━━━━━━",
      "🌐 Сайт: https://prosmm.vercel.app",
      "⏰ Свяжитесь с клиентом как можно скорее",
    ].join("\n");
  }

  return [
    "🔥 *ЗАЯВКАИ НАВ — PROSMM*",
    "━━━━━━━━━━━━━━━━",
    "",
    `📦 *Тариф:* ${planName}`,
    `👤 *Ном:* ${name}`,
    `📱 *Телефон:* ${phone}`,
    `🎯 *Ҳадаф:* ${goal}`,
    "",
    "━━━━━━━━━━━━━━━━",
    "🌐 Сайт: https://prosmm.vercel.app",
    "⏰ Бо мизоҷ ҳарчи зудтар тамос гиред",
  ].join("\n");
}

function toChatId(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return `${digits}@c.us`;
}

export async function POST(request: Request) {
  const idInstance = process.env.GREEN_API_ID_INSTANCE?.trim();
  const apiToken = process.env.GREEN_API_TOKEN_INSTANCE?.trim();
  const apiUrl = (process.env.GREEN_API_URL ?? "https://api.green-api.com").replace(/\/$/, "");
  const notifyChatId = toChatId(process.env.GREEN_API_NOTIFY_PHONE ?? WHATSAPP_NUMBER);

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

  const message = buildLeadMessage({ planName, name, phone, goal, locale });
  const endpoint = `${apiUrl}/waInstance${idInstance}/sendMessage/${apiToken}`;

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chatId: notifyChatId,
        message,
        linkPreview: true,
      }),
    });

    const data = (await upstream.json().catch(() => null)) as { idMessage?: string; message?: string } | null;

    if (!upstream.ok) {
      return NextResponse.json(
        { error: data?.message ?? "Failed to send WhatsApp message" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, idMessage: data?.idMessage ?? null });
  } catch {
    return NextResponse.json({ error: "WhatsApp request failed" }, { status: 502 });
  }
}
