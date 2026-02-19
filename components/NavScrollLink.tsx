"use client";

import type { MouseEvent, ReactNode } from "react";
import { trackEvent } from "@/lib/tracking";

type NavScrollLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export function NavScrollLink({ href, className, children }: NavScrollLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!href.startsWith("#")) return;

    event.preventDefault();
    if (href === "#planos") {
      trackEvent("click_view_plans", { origin: "navbar" });
    }
    const target = document.querySelector(href);
    if (!target) return;

    const headerOffset = 88;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: "smooth",
    });
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
