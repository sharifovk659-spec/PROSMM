"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { buildWhatsAppPurchaseUrl, useContent, useLocale } from "@/i18n";

interface PurchaseModalProps {
  open: boolean;
  planName: string;
  onClose: () => void;
}

export function PurchaseModal({ open, planName, onClose }: PurchaseModalProps) {
  const { purchaseForm } = useContent();
  const { locale } = useLocale();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("");

  useEffect(() => {
    if (!open) return;
    setName("");
    setPhone("");
    setGoal("");
  }, [open, planName]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const canSubmit = name.trim().length > 1 && phone.trim().length > 5 && goal.trim().length > 2;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSubmit) return;

    const url = buildWhatsAppPurchaseUrl(
      {
        planName,
        name: name.trim(),
        phone: phone.trim(),
        goal: goal.trim(),
      },
      locale,
    );

    const whatsappLink = document.createElement("a");
    whatsappLink.href = url;
    whatsappLink.target = "_blank";
    whatsappLink.rel = "noopener noreferrer";
    document.body.appendChild(whatsappLink);
    whatsappLink.click();
    whatsappLink.remove();

    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[210] flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={purchaseForm.title}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={onClose}
            aria-label={purchaseForm.close}
          />

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-[480px] overflow-hidden rounded-[28px] border border-white/12 bg-[#0a0a0a] shadow-[0_32px_100px_rgba(0,0,0,0.75)]"
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(ellipse_80%_100%_at_50%_0%,rgba(255,122,47,0.22)_0%,transparent_70%)]"
              aria-hidden
            />

            <div className="relative border-b border-white/8 px-5 py-5 sm:px-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-[family-name:var(--font-oswald)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ff9652]">
                    WhatsApp
                  </p>
                  <h2 className="mt-1 font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-white sm:text-4xl">
                    {purchaseForm.title}
                  </h2>
                  <p className="mt-1 font-[family-name:var(--font-inter)] text-xs text-gray sm:text-sm">
                    {purchaseForm.subtitle}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/30 hover:text-white"
                  aria-label={purchaseForm.close}
                >
                  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                    <path
                      d="M5 5l10 10M15 5L5 15"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="relative space-y-4 px-5 py-5 sm:px-6 sm:py-6">
              <div>
                <label className="mb-1.5 block font-[family-name:var(--font-oswald)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ff9652]">
                  {purchaseForm.planLabel}
                </label>
                <div className="rounded-2xl border border-[#ff9652]/35 bg-[#ff7a2f]/10 px-4 py-3.5 font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-wide text-white">
                  {planName}
                </div>
              </div>

              <div>
                <label
                  htmlFor="purchase-name"
                  className="mb-1.5 block font-[family-name:var(--font-oswald)] text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55"
                >
                  {purchaseForm.nameLabel}
                </label>
                <input
                  id="purchase-name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder={purchaseForm.namePlaceholder}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 font-[family-name:var(--font-inter)] text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#ff9652]/50 focus:bg-white/[0.06]"
                />
              </div>

              <div>
                <label
                  htmlFor="purchase-phone"
                  className="mb-1.5 block font-[family-name:var(--font-oswald)] text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55"
                >
                  {purchaseForm.phoneLabel}
                </label>
                <input
                  id="purchase-phone"
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder={purchaseForm.phonePlaceholder}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 font-[family-name:var(--font-inter)] text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#ff9652]/50 focus:bg-white/[0.06]"
                />
              </div>

              <div>
                <label
                  htmlFor="purchase-goal"
                  className="mb-1.5 block font-[family-name:var(--font-oswald)] text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55"
                >
                  {purchaseForm.goalLabel}
                </label>
                <textarea
                  id="purchase-goal"
                  value={goal}
                  onChange={(event) => setGoal(event.target.value)}
                  placeholder={purchaseForm.goalPlaceholder}
                  required
                  rows={3}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#ff9652]/50 focus:bg-white/[0.06]"
                />
              </div>

              <p className="font-[family-name:var(--font-inter)] text-[11px] text-white/35">
                {purchaseForm.requiredHint}
              </p>

              <motion.button
                type="submit"
                disabled={!canSubmit}
                whileHover={canSubmit ? { scale: 1.02, y: -1 } : undefined}
                whileTap={canSubmit ? { scale: 0.98 } : undefined}
                className="btn-primary flex w-full items-center justify-center gap-2.5 rounded-[18px] px-6 py-4 font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.14em] text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {purchaseForm.submit}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
