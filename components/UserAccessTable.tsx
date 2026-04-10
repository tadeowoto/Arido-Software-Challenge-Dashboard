import type { UserResponse } from "@/types/userTypes";

interface UserAccessProps {
  user: UserResponse;
}

export default function UserAccessTable({ user }: UserAccessProps) {
  const initials = user.username.substring(0, 2).toUpperCase();

  return (
    <article className="w-full bg-surface-light border border-border-light rounded-xl overflow-hidden shadow-sm animate-in fade-in zoom-in-95 duration-300">
      <header className="p-5 flex items-center gap-3 border-b border-border-light">
        <div className="w-10 h-10 rounded-full bg-highlight-orange/10 flex items-center justify-center text-highlight-orange font-semibold text-sm border border-highlight-orange/20">
          {initials}
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-text-primary font-semibold text-base leading-none">
            {user.username}
          </h3>
          <span className="w-fit px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-medium rounded-md border border-green-200 uppercase tracking-wider">
            {user.status}
          </span>
        </div>
      </header>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-bg-light border-b border-border-light">
              <th className="px-6 py-3.5 text-text-secondary text-[11px] font-semibold uppercase tracking-widest">
                Security Group
              </th>
              <th className="px-6 py-3.5 text-text-secondary text-[11px] font-semibold uppercase tracking-widest text-right">
                Access Level
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-light">
            {user.groups.map((group, index) => (
              <tr key={index} className="hover:bg-bg-light transition-colors">
                <td className="px-6 py-4 text-text-primary text-sm font-medium">
                  {group.groupName}
                </td>
                <td className="px-6 py-4 text-right">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-medium border ${
                      group.accessLevel === "Administrator"
                        ? "bg-highlight-blue/8 text-highlight-blue border-highlight-blue/20"
                        : group.accessLevel === "Write"
                          ? "bg-highlight-orange/8 text-highlight-orange border-highlight-orange/20"
                          : "bg-bg-light text-text-secondary border-border-light"
                    }`}
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
