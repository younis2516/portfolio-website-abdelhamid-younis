export default function ExperienceSkeleton() {
  return (
    <div className="divide-y divide-zinc-200 dark:divide-zinc-800 animate-pulse">
      {[0, 1].map((i) => (
        <div
          key={i}
          className="grid grid-cols-1 lg:grid-cols-[3fr_6fr_4fr] gap-8 py-10"
        >
          <div className="space-y-2">
            <div className="h-5 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4" />
            <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-1/2" />
            <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-2/5" />
          </div>
          <div className="space-y-3">
            <div className="h-5 bg-neutral-200 dark:bg-neutral-800 rounded w-1/2" />
            <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-full" />
            <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-5/6" />
            <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-4/5" />
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="h-6 w-20 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
            <div className="h-6 w-16 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
