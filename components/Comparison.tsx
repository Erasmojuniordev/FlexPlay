export function Comparison() {
  return (
    <section aria-labelledby="comparativo" className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
      <h2 id="comparativo" className="text-center text-2xl font-semibold text-white sm:text-3xl">
        FlexPlay vs Outros
      </h2>
      <div className="fp-surface mt-8 overflow-hidden rounded-2xl">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-[linear-gradient(90deg,#142247,#2B1B66)] text-white">
            <tr>
              <th className="px-4 py-3">Ponto de comparação</th>
              <th className="px-4 py-3 text-[#39FF14]">FlexPlay</th>
              <th className="px-4 py-3 text-white/70">Outros</th>
            </tr>
          </thead>
          <tbody className="bg-[#0E1117]/80 text-white/80">
            <tr className="border-t border-white/10 transition hover:bg-[#15203B]/65">
              <td className="px-4 py-3">Suporte no processo de ativação</td>
              <td className="px-4 py-3">Orientação clara e rápida</td>
              <td className="px-4 py-3">Atendimento inconsistente</td>
            </tr>
            <tr className="border-t border-white/10 transition hover:bg-[#15203B]/65">
              <td className="px-4 py-3">Experiência de uso</td>
              <td className="px-4 py-3">Fluxo simples e intuitivo</td>
              <td className="px-4 py-3">Processos confusos</td>
            </tr>
            <tr className="border-t border-white/10 transition hover:bg-[#15203B]/65">
              <td className="px-4 py-3">Custo-benefício</td>
              <td className="px-4 py-3">Planos claros e competitivos</td>
              <td className="px-4 py-3">Valor nem sempre proporcional</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
