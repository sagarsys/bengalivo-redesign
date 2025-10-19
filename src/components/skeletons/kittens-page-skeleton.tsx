// Skeleton for kittens page layout
import { GridSkeleton } from "./grid-skeleton";
import { TimelineSkeleton } from "./timeline-skeleton";
import { motion } from "framer-motion";

export function KittensPageSkeleton() {
  return (
    <>
      {/* Header Skeleton */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="h-12 bg-muted rounded animate-pulse w-48 mx-auto mb-4"></div>
      </motion.div>

      {/* Kittens Available Section Skeleton */}
      <section className="mb-16">
        <div className="h-8 bg-muted rounded animate-pulse w-64 mx-auto mb-8"></div>
        <div className="text-center mb-8 space-y-2">
          <div className="h-4 bg-muted rounded animate-pulse w-96 mx-auto"></div>
          <div className="h-4 bg-muted rounded animate-pulse w-48 mx-auto"></div>
          <div className="h-4 bg-muted rounded animate-pulse w-40 mx-auto"></div>
        </div>
        <GridSkeleton count={3} columns={{ mobile: 1, tablet: 2, desktop: 3 }} />
      </section>

      {/* Retired Cats Section Skeleton */}
      <section className="mb-16">
        <div className="h-8 bg-muted rounded animate-pulse w-56 mx-auto mb-8"></div>
        <div className="h-4 bg-muted rounded animate-pulse w-80 mx-auto mb-6"></div>
        <GridSkeleton count={3} columns={{ mobile: 1, tablet: 2, desktop: 3 }} />
      </section>

      {/* Planned Litters Section Skeleton */}
      <section className="mb-16">
        <div className="h-8 bg-muted rounded animate-pulse w-72 mx-auto mb-4"></div>
        <div className="h-4 bg-muted rounded animate-pulse w-64 mx-auto mb-8"></div>
        <TimelineSkeleton count={4} />
      </section>

      {/* Adopting Section Skeleton */}
      <section className="mb-16">
        <div className="text-center space-y-4">
          <div className="h-8 bg-muted rounded animate-pulse w-56 mx-auto"></div>
          <div className="h-5 bg-muted rounded animate-pulse w-96 mx-auto"></div>
          <div className="h-10 bg-muted rounded animate-pulse w-48 mx-auto"></div>
        </div>
      </section>
    </>
  );
}

