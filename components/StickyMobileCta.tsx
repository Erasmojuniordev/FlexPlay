"use client";

import { CtaButton } from "@/components/CtaButton";
import { WHATSAPP_LINK } from "@/lib/config";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#2B4384]/70 bg-[#0B1020]/92 p-3 backdrop-blur md:hidden">
      <div className="mx-auto max-w-6xl">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-medium text-[#D6E5FF]">Ative com suporte em poucos passos</p>
          <span className="rounded-full border border-[#39FF14]/60 bg-[#17301A] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#B8FFAA]">
            online agora
          </span>
        </div>
        <CtaButton
          href={WHATSAPP_LINK}
          label="Ativar agora no WhatsApp"
          eventName="click_cta_primary"
          eventParams={{ origin: "sticky_mobile" }}
          className="w-full"
        />
      </div>
    </div>
  );
}
