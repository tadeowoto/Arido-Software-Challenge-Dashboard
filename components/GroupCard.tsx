import { Shield } from "lucide-react";

interface GroupCardProps {
  name: string;
  description: string;
}

export default function GroupCard({ name, description }: GroupCardProps) {
  return (
    <article className="bg-surface-dark rounded-2xl p-6 shadow-xl border border-border-dark hover:border-highlight-blue/50 transition-all duration-300 group">
      <header className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-highlight-blue/10 rounded-xl text-highlight-blue group-hover:bg-highlight-blue group-hover:text-bg-dark transition-colors duration-300">
          <Shield className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-text-primary lowercase first-letter:uppercase">
          {name}
        </h2>
      </header>

      <p className="text-text-secondary text-sm leading-relaxed mb-6">
        {description ||
          "Sin descripción disponible para este grupo de seguridad."}
      </p>
      <div className="h-px bg-border-dark w-full" />

      <footer className="mt-4 flex items-center justify-end">
        <span className="px-3 py-1 bg-highlight-orange/10 text-highlight-orange text-xs rounded-full border border-highlight-orange/20">
          Activo
        </span>
      </footer>
    </article>
  );
}
