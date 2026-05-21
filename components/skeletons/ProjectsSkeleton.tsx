export default function ProjectsSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Featured card */}
      <div className="rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 grid grid-cols-1 lg:grid-cols-2 min-h-[24rem]">
        <div className="bg-neutral-200 dark:bg-neutral-800 min-h-[14rem]" />
        <div className="p-8 lg:p-12 space-y-4">
          <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-1/4" />
          <div className="h-7 bg-neutral-200 dark:bg-neutral-800 rounded-lg w-4/5" />
          <div className="h-7 bg-neutral-200 dark:bg-neutral-800 rounded-lg w-3/5" />
          <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-full" />
          <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-5/6" />
          <div className="flex gap-2 mt-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-8 w-20 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      {/* Small cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-3xl border border-black/10 dark:border-white/10 p-8 space-y-3"
          >
            <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded w-1/3" />
            <div className="h-6 bg-neutral-200 dark:bg-neutral-800 rounded-lg w-full" />
            <div className="h-6 bg-neutral-200 dark:bg-neutral-800 rounded-lg w-4/5" />
            <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-full mt-2" />
            <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4" />
          </div>
        ))}
      </div>
    </div>
  );
}
