"use client";

import { useMemo, useState } from "react";

type ContentItem = {
  title: string;
  type: "Série" | "Filme";
  genre: string;
  source: string;
  coverUrl: string;
};

const CONTENTS: ContentItem[] = [
  {
    title: "Stranger Things",
    type: "Série",
    genre: "Ficção e Suspense",
    source: "Sucesso em streaming global",
    coverUrl: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
  },
  {
    title: "Round 6",
    type: "Série",
    genre: "Drama e Suspense",
    source: "Sucesso em streaming global",
    coverUrl: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
  },
  {
    title: "The Last of Us",
    type: "Série",
    genre: "Drama e Ação",
    source: "Sucesso em streaming premium",
    coverUrl: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
  },
  {
    title: "La Casa de Papel",
    type: "Série",
    genre: "Ação e Crime",
    source: "Sucesso em streaming global",
    coverUrl: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
  },
  {
    title: "Breaking Bad",
    type: "Série",
    genre: "Drama e Crime",
    source: "Clássico de streaming",
    coverUrl: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
  },
  {
    title: "The Boys",
    type: "Série",
    genre: "Ação e Humor",
    source: "Sucesso em streaming premium",
    coverUrl: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg",
  },
  {
    title: "Top Gun: Maverick",
    type: "Filme",
    genre: "Ação",
    source: "Destaque em streamings",
    coverUrl: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
  },
  {
    title: "Barbie",
    type: "Filme",
    genre: "Comédia",
    source: "Destaque em streamings",
    coverUrl: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
  },
];

export function Comparison() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = useMemo(() => CONTENTS[activeIndex], [activeIndex]);

  function next() {
    setActiveIndex((prev) => (prev + 1) % CONTENTS.length);
  }

  function prev() {
    setActiveIndex((prev) => (prev - 1 + CONTENTS.length) % CONTENTS.length);
  }

  return (
    <section aria-labelledby="comparativo" className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2 id="comparativo" className="text-2xl font-semibold text-white sm:text-3xl">
          Conteúdos em Destaque no Pacote
        </h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="rounded-lg border border-[#355FD7]/70 bg-[#111A33]/80 px-3 py-2 text-sm text-[#D6E3FF] transition hover:border-[#4A7BF2]"
            aria-label="Conteúdo anterior"
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={next}
            className="rounded-lg border border-[#355FD7]/70 bg-[#111A33]/80 px-3 py-2 text-sm text-[#D6E3FF] transition hover:border-[#4A7BF2]"
            aria-label="Próximo conteúdo"
          >
            Próximo
          </button>
        </div>
      </div>

      <div className="fp-surface overflow-hidden rounded-2xl p-4 sm:p-5">
        <div className="grid gap-4 md:grid-cols-[240px,1fr]">
          <div className="overflow-hidden rounded-xl border border-white/10">
            <img
              src={active.coverUrl}
              alt={`Capa de ${active.title}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-5">
            <div>
              <p className="inline-flex rounded-full border border-[#3A61CA]/70 bg-[#101C3D]/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#D8E6FF]">
                {active.type}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{active.title}</h3>
              <p className="mt-2 text-sm text-[#C4D4F4]">{active.genre}</p>
              <p className="mt-1 text-sm text-[#B5C8EF]">{active.source}</p>
              <p className="mt-4 text-sm text-[#D7E3FF]">
                Explore este e muitos outros títulos no pacote FlexPlay, com uma experiência simples e suporte quando precisar.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {CONTENTS.map((item, index) => (
                <button
                  key={`${item.title}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full px-3 py-1 text-xs transition ${
                    index === activeIndex
                      ? "bg-[#39FF14] text-[#10131A]"
                      : "border border-white/15 bg-white/5 text-[#D2DEFA] hover:border-[#4A7BF2]"
                  }`}
                  aria-label={`Selecionar ${item.title}`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
