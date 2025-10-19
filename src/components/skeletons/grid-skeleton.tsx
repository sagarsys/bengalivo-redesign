// Skeleton for grid layouts
import { CardSkeleton } from "./card-skeleton";

type GridSkeletonProps = {
  count?: number;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  showHeader?: boolean;
  imageHeight?: string;
};

export function GridSkeleton({ 
  count = 6, 
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  showHeader = true,
  imageHeight = "h-48"
}: GridSkeletonProps) {
  const gridClass = `grid grid-cols-${columns.mobile} md:grid-cols-${columns.tablet} lg:grid-cols-${columns.desktop} gap-6`;
  
  return (
    <div className={gridClass}>
      {Array.from({ length: count }).map((_, index) => (
        <CardSkeleton key={index} showHeader={showHeader} imageHeight={imageHeight} />
      ))}
    </div>
  );
}

