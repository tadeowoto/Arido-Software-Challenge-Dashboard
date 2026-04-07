import { Plus } from "lucide-react";

interface HeaderProps {
  where: string;
}

export default function Header({ where }: HeaderProps) {
  return (
    <header className="font-bold sticky top-0 z-50 w-full h-16 bg-surface-dark flex items-center justify-between p-5">
      <div>
        <h1 className="text-xl md:text-2xl ">{where}</h1>
      </div>
      <button className="flex items-center gap-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm active:scale-95">
        <Plus className="w-4 h-4" />
        Create User
      </button>
    </header>
  );
}
