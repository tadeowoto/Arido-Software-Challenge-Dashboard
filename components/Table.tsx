"use client";
import { UserResponse } from "@/types/userTypes";
import GroupItem from "./GroupItem";
import StatusItem from "./StatusItem";
import { useState } from "react";
import UserModal from "./UserModal";

interface TableProps {
  columns: { header: string; key: string }[];
  data: UserResponse[];
}

export default function Table({ columns, data }: TableProps) {
  const [selectedUser, setSelectedUser] = useState<UserResponse | null>(null);

  return (
    <div className="w-full px-4 py-2">
      <div className="w-full overflow-x-auto rounded-xl border border-border-light bg-surface-light shadow-sm">
        <table className="w-full min-w-200 text-center border-collapse">
          <thead>
            <tr className="border-b border-border-light bg-bg-light">
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="py-4 px-6 text-text-secondary text-[11px] uppercase tracking-[0.15em] font-semibold text-center"
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
                className="border-b border-border-light hover:bg-bg-light transition-colors h-16 min-h-16 hover:cursor-pointer"
                onClick={() => setSelectedUser(row)}
              >
                <td className="px-6 py-2 align-middle">
                  <p className="font-medium text-text-primary">
                    {row.username}
                  </p>
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
      {selectedUser && (
        <UserModal
          userInfo={selectedUser}
          open={!!selectedUser}
          onclose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
}
