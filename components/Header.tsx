import { CtaButton } from "@/components/CtaButton";
import { NavScrollLink } from "@/components/NavScrollLink";
import { WHATSAPP_LINK } from "@/lib/config";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0A0C14]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <NavScrollLink href="#topo" className="group inline-flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="h-2.5 w-2.5 rounded-full bg-[#27C2FF] shadow-[0_0_14px_#27C2FF]" />
          <span className="text-white">Flex</span>
          <span className="fp-gradient-text">Play</span>
        </NavScrollLink>
        <nav aria-label="Navegacao principal" className="hidden gap-6 text-sm text-white/80 md:flex">
          <NavScrollLink href="#beneficios" className="transition hover:text-[#27C2FF]">
            Beneficios
          </NavScrollLink>
          <NavScrollLink href="#planos" className="transition hover:text-[#1B7CFF]">
            Planos
          </NavScrollLink>
          <NavScrollLink href="#faq" className="transition hover:text-[#8A63FF]">
            FAQ
          </NavScrollLink>
        </nav>
        <CtaButton href={WHATSAPP_LINK} label="Ativar agora" eventName="click_cta_primary" className="px-4 py-2 text-xs sm:text-sm" />
      </div>
    </header>
  );
}
