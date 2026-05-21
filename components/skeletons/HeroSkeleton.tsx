export default function HeroSkeleton() {
  return (
    <div className="space-y-4 animate-pulse w-full">
      <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded-full w-28" />
      <div className="h-9 sm:h-10 lg:h-12 bg-neutral-200 dark:bg-neutral-800 rounded-xl w-4/5" />
      <div className="h-9 sm:h-10 lg:h-12 bg-neutral-200 dark:bg-neutral-800 rounded-xl w-3/5" />
      <div className="h-5 bg-neutral-200 dark:bg-neutral-800 rounded-lg w-full mt-2" />
      <div className="h-5 bg-neutral-200 dark:bg-neutral-800 rounded-lg w-4/5" />
    </div>
  );
}
