"use client";

import { trackEvent, type EventParams, type TrackingEvent } from "@/lib/tracking";
import { buildWhatsAppHref } from "@/lib/whatsapp";

type CtaButtonProps = {
  href: string;
  label: string;
  eventName: TrackingEvent;
  className?: string;
  planName?: string;
  eventParams?: EventParams;
};

export function CtaButton({ href, label, eventName, className = "", planName, eventParams }: CtaButtonProps) {
  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        const targetHref = buildWhatsAppHref(href, { planName });
        trackEvent("click_whatsapp", { cta_label: label, plan_name: planName || "", ...eventParams });
        trackEvent(eventName, eventParams);
        window.location.href = targetHref;
      }}
      className={`inline-flex items-center justify-center rounded-xl bg-[#39FF14] px-6 py-3 text-sm font-semibold text-[#10131A] shadow-[0_10px_24px_rgba(57,255,20,0.28)] transition duration-300 hover:-translate-y-0.5 hover:brightness-95 hover:shadow-[0_14px_30px_rgba(57,255,20,0.32)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39FF14] ${className}`}
      aria-label={label}
    >
      {label}
    </a>
  );
}
