"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { FreeLessonsModal } from "@/components/ui/FreeLessonsModal";

interface FreeLessonsContextValue {
  open: () => void;
  close: () => void;
}

const FreeLessonsContext = createContext<FreeLessonsContextValue | null>(null);

export function FreeLessonsProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <FreeLessonsContext.Provider value={{ open: handleOpen, close: handleClose }}>
      {children}
      <FreeLessonsModal open={open} onClose={handleClose} />
    </FreeLessonsContext.Provider>
  );
}

export function useFreeLessons() {
  const context = useContext(FreeLessonsContext);
  if (!context) {
    throw new Error("useFreeLessons must be used within FreeLessonsProvider");
  }
  return context;
}
