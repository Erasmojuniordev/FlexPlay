import type { Metadata } from "next";
import { Benefits } from "@/components/Benefits";
import { AudienceShowcase } from "@/components/AudienceShowcase";
import { CatalogHighlight } from "@/components/CatalogHighlight";
import { Comparison } from "@/components/Comparison";
import { ConversionEvents } from "@/components/ConversionEvents";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Plans } from "@/components/Plans";
import { SocialProof } from "@/components/SocialProof";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export const metadata: Metadata = {
  title: "FlexPlay | Entretenimento sem estresse",
  description:
    "Landing page oficial da FlexPlay com planos acessíveis, suporte dedicado e experiência simplificada.",
  openGraph: {
    title: "FlexPlay | Entretenimento sem estresse",
    description:
      "Conheça os planos da FlexPlay e fale com o suporte para ativar com praticidade.",
    type: "website",
    url: "https://w.app/flexplay",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-transparent pb-24 text-white antialiased md:pb-0">
      <ConversionEvents />
      <Header />
      <Hero />
      <CatalogHighlight />
      <AudienceShowcase />
      <SocialProof />
      <Benefits />
      <HowItWorks />
      <Plans />
      <Comparison />
      <Faq />
      <FinalCta />
      <Footer />
      <StickyMobileCta />
    </main>
  );
}
