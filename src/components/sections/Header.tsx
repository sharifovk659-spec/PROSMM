"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useContent } from "@/i18n";
import { OpenLessonsButton } from "@/components/ui/OpenLessonsButton";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function Header() {
  const [open, setOpen] = useState(false);
  const { navLinks, uiLabels } = useContent();

  return (
    <header className="section-padding-inline fixed left-0 right-0 top-0 z-50 py-4 lg:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-bebas)] text-2xl tracking-widest text-white sm:text-3xl">
            PRO
          </span>
          <span className="font-[family-name:var(--font-bebas)] text-2xl tracking-widest text-gradient-orange sm:text-3xl">
            SMM
          </span>
        </a>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
          type="button"
          className="flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span
            className={`block h-0.5 w-6 accent-gradient transition-transform duration-[250ms] ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 accent-gradient transition-opacity duration-[250ms] ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 accent-gradient transition-transform duration-[250ms] ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-card mx-auto mt-2 max-w-6xl p-6 backdrop-blur-md"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-oswald)] text-sm uppercase tracking-widest text-gray transition-colors duration-[250ms] hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <OpenLessonsButton className="w-full">
              {uiLabels.getLessons}
            </OpenLessonsButton>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
