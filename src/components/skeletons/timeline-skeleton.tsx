// Skeleton for timeline/list items

type Props = {
  count?: number;
};

export function TimelineSkeleton({ count = 3 }: Props) {
  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="relative pl-8 pb-6 border-l-2 border-primary/30 last:border-0 last:pb-0"
        >
          {/* Timeline dot skeleton */}
          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 border-primary bg-muted animate-pulse"></div>
          
          <div className="bg-card rounded-lg p-6 border border-border/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
              <div className="space-y-2">
                <div className="h-6 bg-muted rounded animate-pulse w-20"></div>
                <div className="h-4 bg-muted rounded animate-pulse w-32"></div>
              </div>
              <div className="h-5 bg-muted rounded animate-pulse w-24"></div>
            </div>
            <div className="space-y-2">
              <div className="h-5 bg-muted rounded animate-pulse w-full"></div>
              <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

