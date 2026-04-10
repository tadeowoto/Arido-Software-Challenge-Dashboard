import type { UserResponse } from "@/types/userTypes";

interface UserAccessProps {
  user: UserResponse;
}

export default function UserAccessTable({ user }: UserAccessProps) {
  const initials = user.username.substring(0, 2).toUpperCase();

  return (
    <article className="w-full bg-surface-dark border border-border-dark rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300">
      <header className="p-6 flex items-center gap-4 bg-surface-dark/50">
        <div className="w-12 h-12 rounded-full bg-highlight-blue/20 flex items-center justify-center text-highlight-blue font-bold text-lg border border-highlight-blue/30">
          {initials}
        </div>
        <div className="flex flex-col">
          <h3 className="text-text-primary font-bold text-xl">
            {user.username}
          </h3>
          <span className="w-fit px-2 py-0.5 bg-green-500/10 text-green-500 text-xs font-bold rounded-md border border-green-500/20 uppercase tracking-wider">
            {user.status}
          </span>
        </div>
      </header>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-y border-border-dark bg-bg-dark/30">
              <th className="px-6 py-4 text-text-secondary text-xs font-semibold uppercase tracking-widest">
                Security Group
              </th>
              <th className="px-6 py-4 text-text-secondary text-xs font-semibold uppercase tracking-widest text-right">
                Access Level
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-dark">
            {user.groups.map((group, index) => (
              <tr
                key={index}
                className="hover:bg-highlight-blue/5 transition-colors group"
              >
                <td className="px-6 py-5 text-text-primary font-medium">
                  {group.groupName}
                </td>
                <td className="px-6 py-5 text-right">
                  <span
                    className={`
                    px-3 py-1 rounded-full text-xs font-bold border
                    ${
                      group.accessLevel === "Administrator"
                        ? "bg-highlight-blue/10 text-highlight-blue border-highlight-blue/20"
                        : group.accessLevel === "Write"
                          ? "bg-highlight-orange/10 text-highlight-orange border-highlight-orange/20"
                          : "bg-slate-500/10 text-slate-400 border-slate-500/20"
                    }
                  `}
                  >
                    {group.accessLevel}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
