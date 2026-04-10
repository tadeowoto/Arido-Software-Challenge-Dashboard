import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full sticky bottom-0 h-16 bg-surface-dark flex items-center justify-center p-5  lg:hidden xl:hidden 2xl:hidden">
      <ul className="flex gap-5">
        <Link href="/">Users</Link>
        <Link href="/groups">Groups</Link>
        <Link href="/user-groups">User Groups</Link>
      </ul>
    </footer>
  );
}
