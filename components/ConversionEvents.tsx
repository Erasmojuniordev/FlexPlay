"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/tracking";

export function ConversionEvents() {
  const trackedScroll = useRef(false);

  useEffect(() => {
    trackEvent("view_page", { page: "/" });

    function handleScroll() {
      if (trackedScroll.current) return;
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      const progress = (scrollTop / maxScroll) * 100;
      if (progress >= 50) {
        trackedScroll.current = true;
        trackEvent("scroll_50", { page: "/" });
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
