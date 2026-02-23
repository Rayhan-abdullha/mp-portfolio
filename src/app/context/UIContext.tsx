"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface UIContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  reportModalOpen: boolean;
  setReportModalOpen: (open: boolean) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [reportModalOpen, setReportModalOpen] = useState<boolean>(false);

  return (
    <UIContext.Provider
      value={{
        activeTab,
        setActiveTab,
        reportModalOpen,
        setReportModalOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used inside UIProvider");
  }
  return context;
}