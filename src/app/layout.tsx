import type { Metadata } from "next";
import { Bebas_Neue, Inter, Oswald } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-bebas",
});

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PROSMM — Продакшн SMM под ключ",
  description:
    "Подкасты, SMM под ключ, YouTube каналы — создаём не просмотры, а лиды.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${bebas.variable} ${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
