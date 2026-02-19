const FAQ_ITEMS = [
  {
    question: "Como faco para contratar?",
    answer: "Basta clicar no botao de WhatsApp, escolher um plano e seguir a orientacao da equipe.",
  },
  {
    question: "Recebo suporte apos a ativacao?",
    answer: "Sim. O suporte continua disponivel para ajudar em duvidas e ajustes quando necessario.",
  },
  {
    question: "Posso trocar de plano depois?",
    answer: "Sim, voce pode conversar com o suporte para avaliar a melhor opcao para o seu momento.",
  },
];

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-titulo" className="mx-auto mt-20 max-w-4xl px-4 sm:px-6">
      <h2 id="faq-titulo" className="text-center text-2xl font-semibold text-white sm:text-3xl">
        Perguntas frequentes
      </h2>
      <div className="mt-8 space-y-3">
        {FAQ_ITEMS.map((item) => (
          <details key={item.question} className="fp-surface fp-hover-lift rounded-xl p-4">
            <summary className="cursor-pointer list-none font-medium text-white transition hover:text-[#CBE0FF]">
              {item.question}
            </summary>
            <p className="mt-2 text-sm text-[#B5C5E9]">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
