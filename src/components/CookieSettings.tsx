'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  Cookie, 
  ShieldCheck, 
  BarChart3, 
  Sliders, 
  X, 
  Check,
  ChevronRight
} from 'lucide-react';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  preferences: boolean;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: true,
  preferences: true,
};

const STORAGE_KEY_CONSENT = 'krewmesh_cookie_consent';
const STORAGE_KEY_PREFS = 'krewmesh_cookie_preferences';

// Helper to allow any component or footer link to open cookie settings directly
export function openCookieSettings() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  }
}

export default function CookieSettings() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const [mounted, setMounted] = useState(false);

  // Apply consent to Google Analytics if present
  const applyGtagConsent = useCallback((analyticsGranted: boolean) => {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      try {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('consent', 'update', {
          analytics_storage: analyticsGranted ? 'granted' : 'denied',
        });
      } catch (err) {
        console.warn('Could not update gtag consent:', err);
      }
    }
  }, []);

  useEffect(() => {
    setMounted(true);

    // Read stored consent
    try {
      const storedConsent = localStorage.getItem(STORAGE_KEY_CONSENT);
      const storedPrefs = localStorage.getItem(STORAGE_KEY_PREFS);

      if (storedPrefs) {
        const parsed = JSON.parse(storedPrefs);
        setPreferences({
          necessary: true,
          analytics: Boolean(parsed.analytics),
          preferences: Boolean(parsed.preferences),
        });
        applyGtagConsent(Boolean(parsed.analytics));
      }

      // If user hasn't made a choice yet, display banner after a subtle delay
      if (!storedConsent) {
        const timer = setTimeout(() => {
          setShowBanner(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore localStorage access errors
    }
  }, [applyGtagConsent]);

  // Listen for global 'open-cookie-settings' custom event
  useEffect(() => {
    const handleOpen = () => {
      setShowModal(true);
    };

    window.addEventListener('open-cookie-settings', handleOpen);
    return () => window.removeEventListener('open-cookie-settings', handleOpen);
  }, []);

  const saveAndClose = (consentType: 'accepted' | 'rejected' | 'custom', newPrefs: CookiePreferences) => {
    setPreferences(newPrefs);
    setShowBanner(false);
    setShowModal(false);

    try {
      localStorage.setItem(STORAGE_KEY_CONSENT, consentType);
      localStorage.setItem(STORAGE_KEY_PREFS, JSON.stringify(newPrefs));
    } catch {
      // Storage unavailable
    }

    applyGtagConsent(newPrefs.analytics);
  };

  const handleAcceptAll = () => {
    const allEnabled: CookiePreferences = {
      necessary: true,
      analytics: true,
      preferences: true,
    };
    saveAndClose('accepted', allEnabled);
  };

  const handleRejectNonEssential = () => {
    const minimal: CookiePreferences = {
      necessary: true,
      analytics: false,
      preferences: false,
    };
    saveAndClose('rejected', minimal);
  };

  const handleSaveCustom = () => {
    saveAndClose('custom', preferences);
  };

  if (!mounted) return null;

  return (
    <>
      {/* 1. Sleek Floating Consent Banner (Bottom Right) */}
      {showBanner && !showModal && (
        <aside
          aria-label="Cookie consent banner"
          className="fixed bottom-5 right-5 z-[9990] max-w-sm sm:max-w-md w-[calc(100vw-2.5rem)] bg-neutral-950/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl shadow-black/80 transition-all duration-300"
        >
          <div className="flex items-start gap-3.5 mb-3">
            <div className="p-2 rounded-xl bg-white/5 text-neutral-300 shrink-0 mt-0.5">
              <Cookie size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-white tracking-tight">Cookie Preferences</h3>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed mt-1">
                We use cookies to analyze studio traffic, enhance performance, and personalize your digital experience across our creative builds.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-white/5">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              style={{ border: 'none', outline: 'none', background: 'transparent' }}
              className="text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer py-1.5 px-1 underline-offset-4 hover:underline"
            >
              Customize
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                style={{ border: 'none', outline: 'none' }}
                className="px-3.5 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                style={{ border: 'none', outline: 'none' }}
                className="px-4 py-1.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-semibold transition-colors cursor-pointer"
              >
                Accept All
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 2. Detailed Cookie Settings Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
        >
          {/* Backdrop Click to Close */}
          <div 
            className="fixed inset-0" 
            onClick={() => setShowModal(false)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-lg bg-neutral-950 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black z-10 my-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-white">
                  <Cookie size={20} />
                </div>
                <div>
                  <h2 id="cookie-modal-title" className="text-lg font-bold text-white tracking-tight">
                    Cookie Settings
                  </h2>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Customize your privacy preferences for this browser
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowModal(false)}
                style={{ border: 'none', outline: 'none', background: 'transparent' }}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Close cookie settings"
              >
                <X size={18} />
              </button>
            </div>

            {/* Cookie Categories */}
            <div className="py-6 space-y-4">
              {/* Strictly Necessary */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck size={16} className="text-emerald-400" />
                    <span className="text-sm font-semibold text-white">Strictly Necessary</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Always Active
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Required for site security, navigation flow, and essential functions like remembering your cookie preferences. Cannot be deactivated.
                </p>
              </div>

              {/* Analytics & Performance */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <BarChart3 size={16} className="text-blue-400" />
                    <span className="text-sm font-semibold text-white">Analytics & Performance</span>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.analytics}
                    onClick={() =>
                      setPreferences((prev) => ({ ...prev, analytics: !prev.analytics }))
                    }
                    style={{ border: 'none', outline: 'none' }}
                    className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out p-0.5 ${
                      preferences.analytics ? 'bg-white' : 'bg-neutral-800'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full transition duration-200 ease-in-out shadow-sm ${
                        preferences.analytics
                          ? 'translate-x-4 bg-black'
                          : 'translate-x-0 bg-neutral-400'
                      }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Collects anonymous interaction metrics via Google Analytics and Vercel Analytics so we can optimize load times, responsive behavior, and layout stability.
                </p>
              </div>

              {/* Experience & Personalization */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Sliders size={16} className="text-purple-400" />
                    <span className="text-sm font-semibold text-white">Experience & Personalization</span>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.preferences}
                    onClick={() =>
                      setPreferences((prev) => ({ ...prev, preferences: !prev.preferences }))
                    }
                    style={{ border: 'none', outline: 'none' }}
                    className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out p-0.5 ${
                      preferences.preferences ? 'bg-white' : 'bg-neutral-800'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full transition duration-200 ease-in-out shadow-sm ${
                        preferences.preferences
                          ? 'translate-x-4 bg-black'
                          : 'translate-x-0 bg-neutral-400'
                      }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Remembers your UI settings, interaction history, and inquiry state for seamless continuity across different sessions and pages.
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-5 border-t border-white/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                style={{ border: 'none', outline: 'none', background: 'transparent' }}
                className="w-full sm:w-auto text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer py-2 px-3 text-center"
              >
                Reject Non-Essential
              </button>

              <div className="w-full sm:w-auto flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  style={{ border: 'none', outline: 'none' }}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold transition-colors cursor-pointer text-center"
                >
                  Save Preferences
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  style={{ border: 'none', outline: 'none' }}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-semibold transition-colors cursor-pointer text-center"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
