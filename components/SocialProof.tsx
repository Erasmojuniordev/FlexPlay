const TESTIMONIALS = [
  {
    name: "Mariana R.",
    profile: "Mae e noveleira",
    text: "O que mais gostei foi o suporte. Recebi orientacao clara e consegui ativar sem complicacao.",
  },
  {
    name: "Carlos M.",
    profile: "Torcedor e fa de esportes",
    text: "A navegacao ficou simples no dia a dia. Quando precisei de ajuda, fui atendido rapidamente.",
  },
  {
    name: "Juliana P.",
    profile: "Maratona filmes e dorama",
    text: "A FlexPlay trouxe mais praticidade para casa. Foi facil comecar e manter tudo funcionando.",
  },
];

export function SocialProof() {
  return (
    <section aria-labelledby="depoimentos" className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
      <h2 id="depoimentos" className="text-center text-2xl font-semibold text-white sm:text-3xl">
        Quem usa, recomenda
      </h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <figure key={item.name} className="fp-surface fp-hover-lift rounded-2xl p-5">
            <blockquote className="text-sm text-white/80">&quot;{item.text}&quot;</blockquote>
            <figcaption className="mt-4 text-sm font-medium text-[#DCE7FF]">{item.name}</figcaption>
            <p className="mt-1 text-xs text-[#AFC1E8]">{item.profile}</p>
          </figure>
        ))}
      </div>
    </section>
  );
}
