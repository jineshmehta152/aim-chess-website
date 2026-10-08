"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface SiteSettingsData {
  phone: string;
  whatsapp: string;
  whatsapp_display: string;
  email: string;
  address: string;
  opening_hours: string;
  instagram: string;
  instagram_url: string;
  facebook_url: string;
  youtube_url: string;
  linkedin_url: string;
  banner_notice: string;
  banner_active: string;
}

export interface SiteSettingsContextValue extends SiteSettingsData {
  isBannerVisible: boolean;
  isLoading: boolean;
  refreshSettings: () => Promise<void>;
  getWhatsAppUrl: (customText?: string) => string;
  getPhoneUrl: () => string;
  getEmailUrl: (subject?: string) => string;
}

const DEFAULT_SETTINGS: SiteSettingsData = {
  phone: "+91 99034 52493",
  whatsapp: "919903452493",
  whatsapp_display: "+91 99034 52493",
  email: "contact@aimchessacademy.com",
  address: "Nabapally, Choto Bazar, Surendranath Colony, Barasat - 700126, Kolkata, WB, India",
  opening_hours: "Monday to Sunday: 9:00 AM - 8:30 PM (Online & Offline Batches)",
  instagram: "@aimchessacademy",
  instagram_url: "https://www.instagram.com/aimchessacademy/",
  facebook_url: "https://www.facebook.com/profile.php?id=100083211338280",
  youtube_url: "https://www.youtube.com/@Aimchessacademy",
  linkedin_url: "https://www.linkedin.com/in/soumen-banerjee-43532b1ab/",
  banner_notice: "🏆 Admissions Open for New Batch! Book a Free Demo Session Today.",
  banner_active: "true",
};

const SiteSettingsContext = createContext<SiteSettingsContextValue>({
  ...DEFAULT_SETTINGS,
  isBannerVisible: true,
  isLoading: false,
  refreshSettings: async () => {},
  getWhatsAppUrl: (text?: string) => {
    const cleanNumber = DEFAULT_SETTINGS.whatsapp.replace(/[^0-9]/g, "") || "919903452493";
    const msg = text || "Hello AIM Chess Academy! I would like to book a Free Demo Chess Class for my child.";
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
  },
  getPhoneUrl: () => `tel:${DEFAULT_SETTINGS.phone.replace(/[^0-9+]/g, "") || "+919903452493"}`,
  getEmailUrl: (subject?: string) => `mailto:${DEFAULT_SETTINGS.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`,
});

export function SiteSettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<SiteSettingsData>(DEFAULT_SETTINGS);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSettings = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/settings", { cache: "no-store" });
      if (res.ok) {
        const json = await res.json();
        if (json?.data && typeof json.data === "object") {
          setSettings((prev) => ({ ...prev, ...json.data }));
        }
      }
    } catch (err) {
      console.warn("Failed to fetch site settings from API, using defaults:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSettings();

    const handleSettingsUpdate = () => {
      fetchSettings();
    };

    window.addEventListener("site-settings-updated", handleSettingsUpdate);
    return () => {
      window.removeEventListener("site-settings-updated", handleSettingsUpdate);
    };
  }, [fetchSettings]);

  const getWhatsAppUrl = useCallback((customText?: string) => {
    const rawNumber = settings.whatsapp || settings.whatsapp_display || "919903452493";
    let clean = rawNumber.replace(/[^0-9]/g, "");
    if (clean.length === 10) {
      clean = `91${clean}`;
    }
    const defaultMsg = "Hello AIM Chess Academy! I would like to book a Free Demo Chess Class for my child.";
    const msg = customText !== undefined ? customText : defaultMsg;
    return msg ? `https://wa.me/${clean}?text=${encodeURIComponent(msg)}` : `https://wa.me/${clean}`;
  }, [settings.whatsapp, settings.whatsapp_display]);

  const getPhoneUrl = useCallback(() => {
    const cleanPhone = settings.phone ? settings.phone.replace(/[^0-9+]/g, "") : "+919903452493";
    return `tel:${cleanPhone}`;
  }, [settings.phone]);

  const getEmailUrl = useCallback((subject?: string) => {
    const email = settings.email || "contact@aimchessacademy.com";
    return subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`;
  }, [settings.email]);

  const isBannerVisible = settings.banner_active === "true" || settings.banner_active === true as any;

  return (
    <SiteSettingsContext.Provider
      value={{
        ...settings,
        isBannerVisible,
        isLoading,
        refreshSettings: fetchSettings,
        getWhatsAppUrl,
        getPhoneUrl,
        getEmailUrl,
      }}
    >
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  const context = useContext(SiteSettingsContext);
  if (!context) {
    throw new Error("useSiteSettings must be used within a SiteSettingsProvider");
  }
  return context;
}
