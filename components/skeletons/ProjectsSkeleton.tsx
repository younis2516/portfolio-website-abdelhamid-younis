export default function ProjectsSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Featured row */}
      <div className="border-t border-hairline pt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[20rem]">
        <div className="bg-hairline min-h-[14rem]" />
        <div className="space-y-4">
          <div className="h-4 bg-hairline w-1/4" />
          <div className="h-7 bg-hairline w-4/5" />
          <div className="h-7 bg-hairline w-3/5" />
          <div className="h-4 bg-hairline w-full" />
          <div className="h-4 bg-hairline w-5/6" />
        </div>
      </div>

      {/* Ledger rows */}
      <div className="divide-y divide-hairline">
        {[0, 1, 2].map((i) => (
          <div key={i} className="py-6 space-y-3">
            <div className="h-3 bg-hairline w-1/6" />
            <div className="h-6 bg-hairline w-2/3" />
            <div className="h-4 bg-hairline w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
