import { Users, LayoutGrid, UserSearch } from "lucide-react";

import logo from "@/public/logo.svg";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full w-full bg-text-primary text-text-secondary p-4 border-r border-border-light">
      <div className="flex flex-col items-center gap-2.5 px-3 mb-10 mt-2">
        <img src={logo.src} alt="Logo" className="w-22 h-22 object-contain" />
        <p className="text-sm font-bold tracking-wide text-center">
          Arido Users Dashboard
        </p>
      </div>

      <nav className="flex-1">
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-all group text-sm"
            >
              <Users className="w-4 h-4 group-hover:text-highlight-blue transition-colors" />
              Users
            </Link>
          </li>
          <li>
            <Link
              href="/groups"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-all group text-sm"
            >
              <LayoutGrid className="w-4 h-4 group-hover:text-highlight-blue transition-colors" />
              Groups
            </Link>
          </li>
          <li>
            <Link
              href="/user-groups"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-all group text-sm"
            >
              <UserSearch className="w-4 h-4 group-hover:text-highlight-blue transition-colors" />
              User Groups
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
