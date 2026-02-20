"use client";

export type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export type TrackingEvent =
  | "view_page"
  | "scroll_50"
  | "click_whatsapp"
  | "click_profile_interest"
  | "click_cta_primary"
  | "click_view_plans"
  | "click_plan_monthly"
  | "click_plan_quarterly"
  | "click_plan_yearly";

export function pushDataLayerEvent(event: TrackingEvent, params?: EventParams) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export function trackEvent(event: TrackingEvent, params?: EventParams) {
  pushDataLayerEvent(event, params);

  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", event, params || {});
  }

  if (window.fbq && event === "click_whatsapp") {
    window.fbq("track", "Contact");
  }
}
