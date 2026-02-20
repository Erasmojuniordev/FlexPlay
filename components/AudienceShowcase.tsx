const PROFILES = [
  {
    title: "Quem curte futebol",
    text: "Acompanhe jogos e campeonatos com facilidade no dia a dia.",
  },
  {
    title: "Quem ama filmes e séries",
    text: "Descubra opções para maratonar quando e onde quiser.",
  },
  {
    title: "Quem não perde novela",
    text: "Conteúdo organizado para assistir com mais praticidade.",
  },
  {
    title: "Quem maratona dorama",
    text: "Explore catálogo variado em uma experiência simples.",
  },
];

export function AudienceShowcase() {
  return (
    <section aria-labelledby="publico" className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
      <h2 id="publico" className="text-center text-2xl font-semibold text-white sm:text-3xl">
        FlexPlay para toda a casa
      </h2>
      <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-[#C6D4EE] sm:text-base">
        Do jovem que acompanha esporte ao vivo ao público que prefere novelas e dorama: a navegação é simples para todos os perfis.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROFILES.map((profile) => (
          <article key={profile.title} className="fp-surface fp-hover-lift rounded-2xl p-5">
            <h3 className="text-base font-semibold text-[#DCE8FF]">{profile.title}</h3>
            <p className="mt-2 text-sm text-[#B9C9EB]">{profile.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
