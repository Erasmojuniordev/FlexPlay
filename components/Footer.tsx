import { INSTAGRAM_HANDLE } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-[#2A3C72]/50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-white/65 sm:px-6">
        <p className="font-medium text-[#D4E4FF]">{INSTAGRAM_HANDLE}</p>
        <p>FlexPlay não possui afiliação com marcas de terceiros mencionadas por usuários ou parceiros.</p>
      </div>
    </footer>
  );
}
