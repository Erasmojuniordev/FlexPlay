"use client";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, string>>;
  }
}

export type TrackingEvent =
  | "click_cta_primary"
  | "click_view_plans"
  | "click_plan_monthly"
  | "click_plan_quarterly"
  | "click_plan_yearly";

export function pushDataLayerEvent(event: TrackingEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event });
}
