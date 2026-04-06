interface TableProps {
  columns: { header: string; key: string }[];
}

export default function Table({ columns }: TableProps) {
  return (
    <div className="p-1">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-border-dark">
            {columns.map((col, index) => (
              <th
                key={index}
                className="py-3 px-2 text-highlight-blue text-xs text-pretty"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm ">
          <tr className="border-b border-border-dark/50">
            <td className="py-3 px-2">Wotoszyn</td>
            <td className="py-3 px-2">Active</td>
            <td className="py-3 px-2">2026-04-06</td>
            <td className="py-3 px-2">Admin</td>
            <td className="py-3 px-2">High</td>
          </tr>
          <tr className="border-b border-border-dark/50">
            <td className="py-3 px-2">Wotoszyn</td>
            <td className="py-3 px-2">Active</td>
            <td className="py-3 px-2">2026-04-06</td>
            <td className="py-3 px-2">Admin</td>
            <td className="py-3 px-2">High</td>
          </tr>
          <tr className="border-b border-border-dark/50">
            <td className="py-3 px-2">Wotoszyn</td>
            <td className="py-3 px-2">Active</td>
            <td className="py-3 px-2">2026-04-06</td>
            <td className="py-3 px-2">Admin</td>
            <td className="py-3 px-2">High</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
