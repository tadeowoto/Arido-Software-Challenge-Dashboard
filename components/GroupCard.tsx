import { Shield } from "lucide-react";

interface GroupCardProps {
  name: string;
  description: string;
}

export default function GroupCard({ name, description }: GroupCardProps) {
  return (
    <article className="bg-surface-light rounded-xl p-5 border border-border-light hover:border-highlight-blue/40 hover:shadow-sm transition-all duration-200 group">
      <header className="flex items-center gap-3 mb-3">
        <div className="p-2.5 bg-highlight-orange/10 rounded-lg text-highlight-orange group-hover:bg-highlight-orange group-hover:text-white transition-colors duration-200">
          <Shield className="w-5 h-5" />
        </div>
        <h2 className="text-base font-semibold text-text-primary lowercase first-letter:uppercase">
          {name}
        </h2>
      </header>

      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        {description ||
          "Sin descripción disponible para este grupo de seguridad."}
      </p>

      <div className="h-px bg-border-light w-full" />

      <footer className="mt-3 flex items-center justify-end">
        <span className="px-2.5 py-1 bg-highlight-blue/8 text-highlight-blue text-[11px] font-medium rounded-full border border-highlight-blue/20">
          Activo
        </span>
      </footer>
    </article>
  );
}
