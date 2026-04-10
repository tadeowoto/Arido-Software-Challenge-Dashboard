export default function LoadingGroups() {
  return (
    <section className="w-full min-h-screen bg-bg-light p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 space-y-2">
          <div className="h-8 w-64 bg-border-light rounded-md animate-pulse" />
          <div className="h-4 w-96 bg-border-light/60 rounded-md animate-pulse" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-surface-light rounded-xl p-5 border border-border-light animate-pulse"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-bg-light rounded-lg" />
                <div className="h-4 w-32 bg-bg-light rounded" />
              </div>

              <div className="space-y-2 mb-6">
                <div className="h-3 w-full bg-bg-light rounded" />
                <div className="h-3 w-5/6 bg-bg-light rounded" />
              </div>

              <div className="h-px bg-bg-light w-full" />

              <div className="mt-4 flex justify-end">
                <div className="h-5 w-16 bg-bg-light rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
