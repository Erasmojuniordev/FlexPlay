"use client";

import { useMemo, useState } from "react";
import { CtaButton } from "@/components/CtaButton";
import { WHATSAPP_LINK } from "@/lib/config";
import { trackEvent } from "@/lib/tracking";

type Profile = {
  id: string;
  title: string;
  headline: string;
  audience: string;
  highlights: string[];
  proof: string;
};

const PROFILES: Profile[] = [
  {
    id: "esportes",
    title: "Esportes ao Vivo",
    headline: "Para quem não quer perder jogos e campeonatos.",
    audience: "Ideal para torcedores e quem acompanha futebol no dia a dia.",
    highlights: [
      "Acesso rápido aos principais canais esportivos.",
      "Navegação simples para achar jogos em poucos toques.",
      "Suporte para configurar e assistir sem estresse.",
    ],
    proof: "Perfil muito procurado por quem assiste jogos todos os dias.",
  },
  {
    id: "filmes-series",
    title: "Filmes e Séries",
    headline: "Para maratonar com praticidade quando quiser.",
    audience: "Ideal para quem busca variedade e conforto na rotina.",
    highlights: [
      "Catálogo amplo para diferentes gostos.",
      "Descoberta fácil de títulos para maratonar.",
      "Experiência fluida em diferentes dispositivos.",
    ],
    proof: "Perfil indicado para quem quer mais opções de entretenimento.",
  },
  {
    id: "familia",
    title: "Família",
    headline: "Para quem quer conteúdo para todas as idades.",
    audience: "Ideal para casas com crianças, jovens e adultos.",
    highlights: [
      "Programação infantil e conteúdo para a família.",
      "Uso intuitivo para diferentes perfis da casa.",
      "Apoio da equipe para ativação e dúvidas.",
    ],
    proof: "Perfil pensado para uso compartilhado no dia a dia.",
  },
  {
    id: "noticias",
    title: "Notícias e Documentários",
    headline: "Para quem quer se informar e explorar novos temas.",
    audience: "Ideal para quem acompanha atualidades com frequência.",
    highlights: [
      "Canais de notícias para acompanhar o dia em tempo real.",
      "Documentários para quem gosta de conteúdo informativo.",
      "Navegação organizada para acesso rápido.",
    ],
    proof: "Perfil escolhido por quem prioriza informação e praticidade.",
  },
];

export function Benefits() {
  const [activeProfileId, setActiveProfileId] = useState(PROFILES[0].id);

  const activeProfile = useMemo(
    () => PROFILES.find((item) => item.id === activeProfileId) || PROFILES[0],
    [activeProfileId],
  );

  return (
    <section id="beneficios" aria-labelledby="beneficios-titulo" className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
      <h2 id="beneficios-titulo" className="text-center text-2xl font-semibold text-white sm:text-3xl">
        Encontre Seu Perfil
      </h2>
      <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-[#C7D5EE] sm:text-base">
        Selecione o perfil que mais combina com você e veja como a FlexPlay pode simplificar sua experiência.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {PROFILES.map((profile) => {
          const isActive = profile.id === activeProfile.id;

          return (
            <button
              key={profile.id}
              type="button"
              onClick={() => {
                setActiveProfileId(profile.id);
                trackEvent("click_profile_interest", { profile_id: profile.id });
              }}
              className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                isActive
                  ? "border-[#39FF14]/70 bg-[#18311D] text-[#DBFFD4]"
                  : "border-[#36518E]/55 bg-[#121A31]/80 text-[#D4E1FC] hover:border-[#4D75D4]"
              }`}
              aria-pressed={isActive}
            >
              {profile.title}
            </button>
          );
        })}
      </div>

      <div className="fp-surface mt-6 rounded-2xl p-6 sm:p-7">
        <p className="inline-flex rounded-full border border-[#2F57BE]/70 bg-[#122044]/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#CFE1FF]">
          Perfil selecionado
        </p>
        <h3 className="mt-4 text-2xl font-semibold text-white">{activeProfile.title}</h3>
        <p className="mt-2 text-base text-[#D1DDF6]">{activeProfile.headline}</p>
        <p className="mt-2 text-sm text-[#AFC2E8]">{activeProfile.audience}</p>

        <ul className="mt-5 grid gap-3 text-sm text-[#D5E2FF] sm:grid-cols-3">
          {activeProfile.highlights.map((item) => (
            <li key={item} className="rounded-xl border border-white/10 bg-white/5 p-4">
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-5 rounded-xl border border-[#39FF14]/35 bg-[#163021]/70 px-4 py-3 text-sm text-[#D1FFD0]">
          {activeProfile.proof}
        </p>

        <div className="mt-6">
          <CtaButton
            href={WHATSAPP_LINK}
            label={`Ativar perfil ${activeProfile.title}`}
            eventName="click_cta_primary"
            eventParams={{ origin: "profile_block", profile_id: activeProfile.id }}
          />
        </div>
      </div>
    </section>
  );
}
