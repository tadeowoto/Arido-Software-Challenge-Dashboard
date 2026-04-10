import Link from "next/link";
import { Users, LayoutGrid, UserSearch } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full sticky bottom-0 h-16 bg-surface-light border-t border-border-light flex items-center justify-center px-6 lg:hidden xl:hidden 2xl:hidden">
      <ul className="flex gap-1 w-full justify-around">
        <li>
          <Link
            href="/"
            className="flex flex-col items-center gap-1 px-4 py-1.5 rounded-lg text-text-secondary hover:text-highlight-blue transition-colors group"
          >
            <Users className="w-5 h-5" />
            <span className="text-[10px] font-medium">Users</span>
          </Link>
        </li>
        <li>
          <Link
            href="/groups"
            className="flex flex-col items-center gap-1 px-4 py-1.5 rounded-lg text-text-secondary hover:text-highlight-blue transition-colors group"
          >
            <LayoutGrid className="w-5 h-5" />
            <span className="text-[10px] font-medium">Groups</span>
          </Link>
        </li>
        <li>
          <Link
            href="/user-groups"
            className="flex flex-col items-center gap-1 px-4 py-1.5 rounded-lg text-text-secondary hover:text-highlight-blue transition-colors group"
          >
            <UserSearch className="w-5 h-5" />
            <span className="text-[10px] font-medium">User Groups</span>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
