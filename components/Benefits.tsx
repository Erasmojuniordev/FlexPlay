const BENEFITS = [
  "Atendimento focado em resolver rápido",
  "Passo a passo simples para ativação",
  "Equipe preparada para tirar dúvidas",
  "Conteúdo para futebol, filmes, novelas e doramas",
  "Planos com excelente custo-benefício",
  "Experiência estável para rotina diária",
];

export function Benefits() {
  return (
    <section id="beneficios" aria-labelledby="beneficios-titulo" className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
      <h2 id="beneficios-titulo" className="text-center text-2xl font-semibold text-white sm:text-3xl">
        Benefícios para sua rotina
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((benefit) => (
          <article key={benefit} className="fp-surface fp-hover-lift group rounded-2xl p-5">
            <h3 className="text-base font-medium text-white transition group-hover:text-[#CBE0FF]">{benefit}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
