"use client";

import React from "react";
import { Cookie } from "lucide-react";

export default function CookieTriggerButton() {
  const handleOpenCookieSettings = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-cookie-settings"));
    }
  };

  return (
    <button
      type="button"
      onClick={handleOpenCookieSettings}
      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#101010]/[0.06] hover:bg-[#D5360C] hover:text-[#E6D5BD] text-[#101010] text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer border border-[#101010]/15"
      aria-label="Manage cookie preferences"
    >
      <Cookie size={14} className="shrink-0" />
      <span>Manage Cookie Preferences</span>
    </button>
  );
}
