import { Users, LayoutGrid, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full w-full bg-surface-dark text-slate-400 p-4 border-r border-slate-800">
      <div className="flex items-center gap-2 px-2 mb-10">
        <span className="text-white font-bold tracking-tight">
          Arido Software System
        </span>
      </div>

      <nav className="flex-1">
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800/50 hover:text-white transition-all group"
            >
              <Users className="w-5 h-5 group-hover:text-[#0ea5e9]" />
              Users
            </Link>
          </li>
          <li>
            <Link
              href="/groups"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800/50 hover:text-white transition-all group"
            >
              <LayoutGrid className="w-5 h-5 group-hover:text-[#0ea5e9]" />
              Groups
            </Link>
          </li>
          <li>
            <Link
              href="/access-levels"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800/50 hover:text-white transition-all group"
            >
              <ShieldCheck className="w-5 h-5 group-hover:text-[#0ea5e9]" />
              Access Levels
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
