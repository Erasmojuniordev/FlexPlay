"use client";

export type WhatsAppContext = {
  planName?: string;
};

export function buildWhatsAppHref(baseHref: string, context: WhatsAppContext) {
  const planText = context.planName || "A definir";
  const text = `Oi, vim pelo site da FlexPlay.\nPlano de interesse: ${planText}`;

  const separator = baseHref.includes("?") ? "&" : "?";
  return `${baseHref}${separator}text=${encodeURIComponent(text)}`;
}
