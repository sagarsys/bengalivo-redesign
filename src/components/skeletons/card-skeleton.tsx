// Skeleton for card components
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type CardSkeletonProps = {
  showHeader?: boolean;
  imageHeight?: string;
};

export function CardSkeleton({ showHeader = true, imageHeight = "h-48" }: CardSkeletonProps) {
  return (
    <Card className="overflow-hidden">
      {showHeader && (
        <CardHeader>
          <div className="h-6 bg-muted rounded animate-pulse w-3/4"></div>
        </CardHeader>
      )}
      <CardContent className="space-y-3">
        <div className={`${imageHeight} bg-muted rounded-lg animate-pulse`}></div>
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded animate-pulse w-full"></div>
          <div className="h-4 bg-muted rounded animate-pulse w-5/6"></div>
          <div className="h-4 bg-muted rounded animate-pulse w-4/6"></div>
        </div>
      </CardContent>
    </Card>
  );
}

