"use client";

import { PLANS, WHATSAPP_LINK } from "@/lib/config";
import { pushDataLayerEvent } from "@/lib/tracking";

export function Plans() {
  return (
    <section id="planos" aria-labelledby="planos-titulo" className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
      <h2 id="planos-titulo" className="text-center text-2xl font-semibold text-white sm:text-3xl">
        Planos FlexPlay
      </h2>
      <p className="mx-auto mt-3 flex w-fit items-center rounded-full border border-[#2B4EA5]/70 bg-[#121E3D]/80 px-3 py-1 text-xs text-[#CFE0FF]">
        Escolha hoje e ative com acompanhamento da equipe
      </p>
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-white/70">
        Escolha o formato que combina com voce. Todos os planos contam com suporte e acompanhamento.
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {PLANS.map((plan) => {
          const isFeatured = plan.badge?.toLowerCase().includes("mais vendido");

          return (
            <article
              key={plan.name}
              className={`rounded-2xl border p-6 ${
                isFeatured
                  ? "fp-hover-lift border-[#39FF14]/80 bg-[linear-gradient(145deg,#16221A,#182A20)] shadow-[0_0_0_1px_rgba(57,255,20,0.15)]"
                  : "fp-surface fp-hover-lift"
              }`}
            >
              {plan.badge ? (
                <p className="mb-3 inline-flex rounded-full bg-[#39FF14] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#10131A]">
                  {plan.badge}
                </p>
              ) : null}
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold text-white">{plan.price}</p>
              <p className="mt-3 text-sm text-white/75">{plan.description}</p>
              <a
                href={WHATSAPP_LINK}
                onClick={() => pushDataLayerEvent(plan.trackingEvent)}
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#39FF14] px-5 py-3 text-sm font-semibold text-[#10131A] transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39FF14]"
              >
                Quero acesso
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
