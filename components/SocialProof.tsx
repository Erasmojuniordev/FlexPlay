import Image from "next/image";

const REAL_PRINTS = [
  {
    src: "/provas/cliente-ricardo.jpg",
    alt: "Print real de conversa com cliente Ricardo no WhatsApp",
    label: "Cliente Ricardo",
  },
  {
    src: "/provas/cliente-larissa.jpg",
    alt: "Print real de conversa com cliente Larissa no WhatsApp",
    label: "Cliente Larissa",
  },
  {
    src: "/provas/cliente-rafael-v2.jpg",
    alt: "Print real de conversa com cliente Rafael no WhatsApp",
    label: "Cliente Rafael",
  },
];

export function SocialProof() {
  return (
    <section aria-labelledby="depoimentos" className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
      <h2 id="depoimentos" className="text-center text-2xl font-semibold text-white sm:text-3xl">
        Quem usa, recomenda
      </h2>
      <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-[#C6D4EE] sm:text-base">
        Resultados reais de atendimento e ativação no dia a dia.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {REAL_PRINTS.map((item) => (
          <figure key={item.src} className="fp-surface fp-hover-lift overflow-hidden rounded-2xl p-3">
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl border border-white/10">
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 text-sm font-medium text-[#DCE7FF]">{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
