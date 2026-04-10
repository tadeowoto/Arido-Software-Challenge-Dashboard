export default function LoadingPage() {
  return (
    <section className="w-full min-h-screen overflow-auto h-fit bg-bg-light text-text-primary flex flex-col">
      <div className="w-full h-16 bg-surface-light border-b border-border-light animate-pulse" />
      <section className="w-full mt-10 flex flex-col items-center justify-center px-6 pb-6">
        <div className="w-full px-4 py-2">
          <div className="w-full overflow-x-auto rounded-xl border border-border-light bg-surface-light shadow-sm">
            <table className="w-full min-w-200 text-center border-collapse">
              <thead>
                <tr className="border-b border-border-light bg-bg-light">
                  {[...Array(4)].map((_, i) => (
                    <th key={i} className="py-4 px-6">
                      <div className="h-3 w-20 bg-border-light rounded-md mx-auto animate-pulse" />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {[...Array(6)].map((_, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-b border-border-light h-16"
                  >
                    <td className="px-6 py-2">
                      <div className="h-4 w-24 bg-bg-light rounded mx-auto animate-pulse" />
                    </td>
                    <td className="px-6 py-2">
                      <div className="h-6 w-16 bg-bg-light rounded-full mx-auto animate-pulse" />
                    </td>
                    <td className="px-6 py-2">
                      <div className="h-4 w-20 bg-bg-light rounded mx-auto animate-pulse" />
                    </td>
                    <td className="px-6 py-2">
                      <div className="flex flex-col items-center gap-1">
                        <div className="h-5 w-32 bg-bg-light rounded-md animate-pulse" />
                        <div className="h-5 w-24 bg-bg-light rounded-md animate-pulse" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  );
}
