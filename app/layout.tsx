import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FlexPlay",
  description: "FlexPlay: experiencia de entretenimento com suporte e praticidade.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={manrope.className}>
        {children}
        <AnalyticsScripts />
      </body>
    </html>
  );
}
