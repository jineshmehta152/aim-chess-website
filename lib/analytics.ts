// ==============================================================================
// GOOGLE ANALYTICS 4 (GA4) & GOOGLE TAG MANAGER (GTM) CONVERSION TRACKING HELPER
// ==============================================================================

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

// Standard GA4 Pageview
export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Custom Conversion & Interaction Event Dispatcher
export const trackEvent = (
  eventName: string,
  eventParams: Record<string, string | number | boolean | undefined> = {}
) => {
  if (typeof window === "undefined") return;

  // 1. Google Analytics 4 (gtag.js)
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }

  // 2. Google Tag Manager (dataLayer)
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }

  // Debugging log in development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event] ${eventName}:`, eventParams);
  }
};

// ==============================================================================
// DEDICATED CONVERSION TRACKING ACTIONS (ESPLÚDIC)
// ==============================================================================

/**
 * Track when a visitor clicks a WhatsApp button or link
 */
export const trackWhatsAppClick = (params: {
  location: string;
  tierName?: string;
  totalPrice?: number;
  phone?: string;
}) => {
  trackEvent("whatsapp_click", {
    event_category: "Conversion",
    event_label: `WhatsApp Chat - ${params.location}`,
    location_on_page: params.location,
    tier_selected: params.tierName || "General",
    estimated_value: params.totalPrice || 0,
    currency: "EUR",
    phone_target: params.phone || "669844333",
  });
};

/**
 * Track when a visitor clicks a direct telephone link
 */
export const trackPhoneCallClick = (params: {
  location: string;
  phone?: string;
}) => {
  trackEvent("phone_call_click", {
    event_category: "Conversion",
    event_label: `Phone Call - ${params.location}`,
    location_on_page: params.location,
    phone_target: params.phone || "+34 669 84 43 33",
  });
};

/**
 * Track successful contact / booking enquiry form submission
 */
export const trackEnquiryFormSubmit = (params: {
  formName: string;
  eventType?: string;
  attendees?: number;
  selectedDate?: string;
}) => {
  trackEvent("enquiry_form_submit", {
    event_category: "Lead",
    event_label: `Form Submission - ${params.formName}`,
    form_name: params.formName,
    event_type: params.eventType || "general",
    attendees: params.attendees || 0,
    requested_date: params.selectedDate || "not_specified",
  });
};

/**
 * Track when a visitor interacts with pricing add-on toggles
 */
export const trackPricingAddonToggle = (params: {
  tierId: string;
  addonName: string;
  addonPrice: number;
  isSelected: boolean;
}) => {
  trackEvent("pricing_addon_toggle", {
    event_category: "Engagement",
    tier_id: params.tierId,
    addon_name: params.addonName,
    addon_price: params.addonPrice,
    is_selected: params.isSelected,
  });
};
