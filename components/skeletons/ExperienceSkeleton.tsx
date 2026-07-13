export default function ExperienceSkeleton() {
  return (
    <div className="divide-y divide-hairline animate-pulse">
      {[0, 1].map((i) => (
        <div
          key={i}
          className="grid grid-cols-1 lg:grid-cols-[3fr_6fr_3fr] gap-8 py-8"
        >
          <div className="space-y-2">
            <div className="h-4 bg-hairline w-3/4" />
          </div>
          <div className="space-y-3">
            <div className="h-5 bg-hairline w-1/2" />
            <div className="h-4 bg-hairline w-full" />
            <div className="h-4 bg-hairline w-5/6" />
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-hairline w-2/3" />
          </div>
        </div>
      ))}
    </div>
  );
}
