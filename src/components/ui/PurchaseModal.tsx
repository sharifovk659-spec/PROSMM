"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useContent, useLocale } from "@/i18n";

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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (!open) return;
    setName("");
    setPhone("");
    setGoal("");
    setStatus("idle");
    setErrorText("");
  }, [open, planName]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && status !== "loading") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, status]);

  const canSubmit =
    status !== "loading" &&
    name.trim().length > 1 &&
    phone.trim().length > 5 &&
    goal.trim().length > 2;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSubmit) return;

    setStatus("loading");
    setErrorText("");

    try {
      const response = await fetch("/api/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planName,
          name: name.trim(),
          phone: phone.trim(),
          goal: goal.trim(),
          locale,
        }),
      });

      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        setStatus("error");
        setErrorText(data?.error || purchaseForm.error);
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorText(purchaseForm.error);
    }
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
            onClick={() => {
              if (status !== "loading") onClose();
            }}
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
                    PROSMM
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
                  disabled={status === "loading"}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/30 hover:text-white disabled:opacity-40"
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

            {status === "success" ? (
              <div className="relative space-y-5 px-5 py-8 text-center sm:px-6">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-gradient text-white shadow-[0_10px_30px_rgba(255,122,47,0.35)]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden>
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-white">
                    {purchaseForm.successTitle}
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-gray">
                    {purchaseForm.successText}
                  </p>
                </div>
                <motion.button
                  type="button"
                  onClick={onClose}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full rounded-[18px] px-6 py-4 font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.14em] text-white"
                >
                  {purchaseForm.close}
                </motion.button>
              </div>
            ) : (
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
                    disabled={status === "loading"}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 font-[family-name:var(--font-inter)] text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#ff9652]/50 focus:bg-white/[0.06] disabled:opacity-60"
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
                    disabled={status === "loading"}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 font-[family-name:var(--font-inter)] text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#ff9652]/50 focus:bg-white/[0.06] disabled:opacity-60"
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
                    disabled={status === "loading"}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#ff9652]/50 focus:bg-white/[0.06] disabled:opacity-60"
                  />
                </div>

                <p className="font-[family-name:var(--font-inter)] text-[11px] text-white/35">
                  {purchaseForm.requiredHint}
                </p>

                {status === "error" && (
                  <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 font-[family-name:var(--font-inter)] text-xs text-red-300">
                    {errorText || purchaseForm.error}
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={!canSubmit}
                  whileHover={canSubmit ? { scale: 1.02, y: -1 } : undefined}
                  whileTap={canSubmit ? { scale: 0.98 } : undefined}
                  className="btn-primary flex w-full items-center justify-center gap-2.5 rounded-[18px] px-6 py-4 font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-[0.14em] text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {status === "loading" ? purchaseForm.sending : purchaseForm.submit}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
