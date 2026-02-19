export const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5579996845148";
export const INSTAGRAM_HANDLE = "@flexplay";

export type PlanEvent =
  | "click_plan_monthly"
  | "click_plan_quarterly"
  | "click_plan_yearly";

export type Plan = {
  name: "Mensal" | "Trimestral" | "Anual";
  price: string;
  description: string;
  badge: string;
  trackingEvent: PlanEvent;
};

export const PLANS: Plan[] = [
  {
    name: "Mensal",
    price: "R$ 22,90",
    description: "Ideal para comecar sem compromisso longo.",
    badge: "Acesso rapido",
    trackingEvent: "click_plan_monthly",
  },
  {
    name: "Trimestral",
    price: "R$ 58,90",
    description: "Mais vendido e melhor custo-beneficio para uso continuo.",
    badge: "Mais vendido",
    trackingEvent: "click_plan_quarterly",
  },
  {
    name: "Anual",
    price: "R$ 199,90",
    description: "Maxima economia para quem quer estabilidade.",
    badge: "Maxima economia",
    trackingEvent: "click_plan_yearly",
  },
];
