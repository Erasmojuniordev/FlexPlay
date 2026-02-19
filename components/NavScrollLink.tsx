"use client";

import type { MouseEvent, ReactNode } from "react";

type NavScrollLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export function NavScrollLink({ href, className, children }: NavScrollLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!href.startsWith("#")) return;

    event.preventDefault();
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
