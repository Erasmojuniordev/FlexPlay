const STEPS = [
  {
    title: "1. Fale com a FlexPlay",
    text: "Clique no WhatsApp e informe seu objetivo para receber recomendacao de plano.",
  },
  {
    title: "2. Escolha o plano ideal",
    text: "Compare as opcoes com tranquilidade e selecione a que faz sentido para sua rotina.",
  },
  {
    title: "3. Ative com apoio",
    text: "Receba orientacao para iniciar com praticidade e suporte quando necessario.",
  },
];

export function HowItWorks() {
  return (
    <section aria-labelledby="como-funciona" className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
      <h2 id="como-funciona" className="text-center text-2xl font-semibold text-white sm:text-3xl">
        Como funciona
      </h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {STEPS.map((step) => (
          <article key={step.title} className="fp-surface fp-hover-lift rounded-2xl p-5">
            <h3 className="text-base font-medium text-[#DBE8FF]">{step.title}</h3>
            <p className="mt-2 text-sm text-[#B7C6EA]">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
