import { CtaButton } from "@/components/CtaButton";
import { WHATSAPP_LINK } from "@/lib/config";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-final" className="mx-auto mt-20 max-w-5xl px-4 pb-20 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-[#365ECF]/60 bg-[linear-gradient(145deg,#0F1630,#241750)] p-8 text-center">
        <div className="fp-glow-blue -left-10 top-4 h-44 w-44 bg-[#1B7CFF]" />
        <div className="fp-glow-blue -bottom-10 right-2 h-52 w-52 bg-[#6B2DFF]" />
        <h2 id="cta-final" className="text-3xl font-semibold text-white sm:text-4xl">
          Pronto para ativar sua <span className="fp-gradient-text">FlexPlay</span>?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/75">
          Fale com a equipe agora e receba orientação para escolher o plano certo com mais tranquilidade.
        </p>
        <div className="mt-8">
          <CtaButton href={WHATSAPP_LINK} label="Ativar agora" eventName="click_cta_primary" eventParams={{ origin: "final_cta" }} />
        </div>
      </div>
    </section>
  );
}
