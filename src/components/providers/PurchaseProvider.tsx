"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { PurchaseModal } from "@/components/ui/PurchaseModal";

interface PurchaseContextValue {
  open: (planName: string) => void;
  close: () => void;
}

const PurchaseContext = createContext<PurchaseContextValue | null>(null);

export function PurchaseProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [planName, setPlanName] = useState("");

  const handleOpen = useCallback((nextPlan: string) => {
    setPlanName(nextPlan);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <PurchaseContext.Provider value={{ open: handleOpen, close: handleClose }}>
      {children}
      <PurchaseModal open={open} planName={planName} onClose={handleClose} />
    </PurchaseContext.Provider>
  );
}

export function usePurchase() {
  const context = useContext(PurchaseContext);
  if (!context) {
    throw new Error("usePurchase must be used within PurchaseProvider");
  }
  return context;
}
