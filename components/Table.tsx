"use client";
import { UserResponse } from "@/types/userTypes";
import GroupItem from "./GroupItem";
import StatusItem from "./StatusItem";
interface TableProps {
  columns: { header: string; key: string }[];
  data: UserResponse[];
}
function handleRowClick(row: UserResponse) {
  console.log(row);
}

export default function Table({ columns, data }: TableProps) {
  return (
    <div className="w-full px-4 py-2 ">
      <div className="w-full overflow-x-auto rounded-xl border border-border-dark/50 bg-surface-dark/20 shadow-lg">
        <table className="w-full min-w-200 text-center border-collapse">
          <thead>
            <tr className="border-b border-border-dark/60 bg-surface-dark/40">
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="py-5 px-6 text-highlight-blue text-[11px] uppercase tracking-[0.2em] font-black opacity-80 text-center"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm">
            {data.map((row, index) => (
              <tr
                key={index}
                className="border-b border-border-dark/40 hover:bg-white/2 transition-colors h-20 min-h-20 hover:cursor-pointer"
                onClick={() => handleRowClick(row)}
              >
                <td className="px-6 py-2 align-middle">
                  <p className="font-medium text-white">{row.username}</p>
                </td>
                <td className="px-6 py-2 align-middle">
                  <StatusItem status={row.status} />
                </td>
                <td className="px-6 py-2 align-middle">
                  <p className="text-text-secondary">{row.createdAt || "—"}</p>
                </td>
                <td className="px-6 py-2 align-middle">
                  <div className="flex flex-col items-center justify-center gap-1">
                    {row.groups.map((group, index) => (
                      <GroupItem key={index} group={group} />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
