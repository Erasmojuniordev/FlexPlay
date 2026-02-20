import { CtaButton } from "@/components/CtaButton";
import { WHATSAPP_LINK } from "@/lib/config";

export function CatalogHighlight() {
  return (
    <section aria-labelledby="catalogo-destaque" className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-[#355ED3]/70 bg-[linear-gradient(140deg,#111C3D,#261A57)] p-6 sm:p-8">
        <div className="fp-glow-blue -left-12 top-2 h-44 w-44 bg-[#27C2FF]" />
        <div className="fp-glow-blue -right-10 bottom-0 h-52 w-52 bg-[#6B2DFF]" />

        <p className="inline-flex rounded-full border border-[#6F8FE0]/60 bg-[#182753]/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#D4E4FF]">
          Destaque FlexPlay
        </p>
        <h2 id="catalogo-destaque" className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Tudo em um só lugar, para você assistir com praticidade
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-[#D3E2FF] sm:text-base">
          Conteúdo para todos os perfis: esportes ao vivo, filmes e séries, opções infantis e canais de notícias para o dia a dia.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-xl border border-white/15 bg-white/5 p-4">
            <p className="text-2xl font-bold text-[#27C2FF]">+1500</p>
            <p className="mt-1 text-sm text-[#D8E4FF]">Canais de TV</p>
          </article>
          <article className="rounded-xl border border-white/15 bg-white/5 p-4">
            <p className="text-2xl font-bold text-[#1B7CFF]">+20000</p>
            <p className="mt-1 text-sm text-[#D8E4FF]">Filmes e Séries</p>
          </article>
          <article className="rounded-xl border border-white/15 bg-white/5 p-4">
            <p className="text-base font-semibold text-[#9E80FF]">Conteúdos Atualizados</p>
            <p className="mt-1 text-sm text-[#D8E4FF]">Novidades frequentes para sua rotina.</p>
          </article>
          <article className="rounded-xl border border-white/15 bg-white/5 p-4">
            <p className="text-base font-semibold text-[#39FF14]">Todos os streamings</p>
            <p className="mt-1 text-sm text-[#D8E4FF]">Em um lugar só, com experiência simplificada.</p>
          </article>
        </div>

        <div className="mt-6">
          <CtaButton
            href={WHATSAPP_LINK}
            label="Quero acesso agora"
            eventName="click_cta_primary"
            eventParams={{ origin: "catalog_highlight" }}
          />
        </div>
      </div>
    </section>
  );
}
