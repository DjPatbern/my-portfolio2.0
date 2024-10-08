"use client";
import React, { ReactNode, createContext } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/src/theme.context";

export const DrawerContext = createContext({} as { onClose?: () => void });

export const Drawer = ({
  children,
  isOpen,
  onClose,
  className,
}: {
  children: ReactNode;
  isOpen: boolean;
  onClose?(): void;
  className?: string;
}) => {
  // Call useTheme at the top level, before any conditionals
  const { darkMode } = useTheme();
  const bg = darkMode ? "bg-ts-dark" : "bg-ts-white";

  const overlayClickHandler = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <DrawerContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-full bg-black/70 z-50 transition-all duration-300",
          className
        )}
        onClick={overlayClickHandler}
      >
        <div
          className={cn(
            `${bg} fixed top-0 right-0 z-40 h-screen px-2 pb-4 overflow-y-auto transition-transform duration-300  w-full max-w-xs`,
            !isOpen && "translate-x-full"
          )}
        >
          <div className="relative">{children}</div>
        </div>
      </div>
    </DrawerContext.Provider>
  );
};

DrawerContext.displayName = "Drawer Context";
