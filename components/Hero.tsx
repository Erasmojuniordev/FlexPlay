"use client";

import { CtaButton } from "@/components/CtaButton";
import { WHATSAPP_LINK } from "@/lib/config";
import { trackEvent } from "@/lib/tracking";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-28">
      <div className="fp-glow-blue -left-10 top-10 -z-10 h-48 w-48 bg-[#27C2FF]" />
      <div className="fp-glow-blue right-12 top-24 -z-10 h-56 w-56 bg-[#6B2DFF]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#1B7CFF_0%,_transparent_38%),radial-gradient(circle_at_82%_22%,_#6B2DFF_0%,_transparent_34%)]" />
      <div className="mx-auto max-w-4xl px-4 pb-20 text-center sm:px-6">
        <span className="fp-fade-up inline-block rounded-full border border-[#6A7DAB]/45 bg-[#151D33]/80 px-3 py-1 text-xs text-[#D8E3FF]">
          Streaming simplificado com suporte humano
        </span>
        <h1 className="fp-fade-up fp-fade-up-delay-1 mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Futebol, filmes, series, novelas e doramas em uma experiencia simples com a{" "}
          <span className="fp-gradient-text">FlexPlay</span>
        </h1>
        <p className="fp-fade-up fp-fade-up-delay-2 mx-auto mt-5 max-w-2xl text-base text-[#C5D0EA] sm:text-lg">
          Da galera que curte esporte ao vivo ate quem ama novelas e dorama: voce ativa rapido e conta com suporte humano para nao passar estresse.
        </p>
        <ul className="mx-auto mt-8 grid max-w-3xl gap-3 text-left text-sm text-white/85 sm:grid-cols-3">
          <li className="fp-surface fp-hover-lift fp-fade-up rounded-xl p-4">Suporte que responde com agilidade quando voce precisa.</li>
          <li className="fp-surface fp-hover-lift fp-fade-up fp-fade-up-delay-1 rounded-xl p-4">Ativacao simples com orientacao passo a passo.</li>
          <li className="fp-surface fp-hover-lift fp-fade-up fp-fade-up-delay-2 rounded-xl p-4">Experiencia fluida em diferentes dispositivos.</li>
        </ul>
        <div className="fp-fade-up fp-fade-up-delay-3 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton href={WHATSAPP_LINK} label="Quero acesso" eventName="click_cta_primary" eventParams={{ origin: "hero" }} />
          <a
            href="#planos"
            onClick={() => trackEvent("click_view_plans", { origin: "hero" })}
            className="inline-flex items-center justify-center rounded-xl border border-[#1B7CFF]/70 bg-[#11182C]/85 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-[#27C2FF] hover:text-[#D7E6FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B7CFF]"
          >
            Ver planos
          </a>
        </div>
      </div>
    </section>
  );
}
