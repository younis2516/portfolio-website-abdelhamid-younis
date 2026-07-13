export default function HeroSkeleton() {
  return (
    <div className="space-y-4 animate-pulse w-full">
      <div className="h-4 bg-hairline w-28" />
      <div className="h-9 sm:h-10 lg:h-12 bg-hairline w-4/5" />
      <div className="h-9 sm:h-10 lg:h-12 bg-hairline w-3/5" />
      <div className="h-5 bg-hairline w-full mt-2" />
      <div className="h-5 bg-hairline w-4/5" />
    </div>
  );
}
