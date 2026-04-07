import Link from "next/link";
export default function Sidebar() {
  return (
    <div className="flex-1 flex flex-col gap-4 p-4 bg-surface-dark text-text-primary">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <nav>
        <ul className="flex flex-col gap-5">
          <Link href="/">Users</Link>
          <Link href="/groups">Groups</Link>
        </ul>
      </nav>
    </div>
  );
}
