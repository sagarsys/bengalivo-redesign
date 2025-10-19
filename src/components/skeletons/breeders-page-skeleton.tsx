// Skeleton for breeders page layout
import { GridSkeleton } from "./grid-skeleton";
import { motion } from "framer-motion";

export function BreedersPageSkeleton() {
  return (
    <>
      {/* Header Skeleton */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="h-12 bg-muted rounded animate-pulse w-64 mx-auto mb-4"></div>
        <div className="h-5 bg-muted rounded animate-pulse w-96 mx-auto"></div>
      </motion.div>

      {/* Intro Text Skeleton */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="h-4 bg-muted rounded animate-pulse w-full"></div>
          <div className="h-4 bg-muted rounded animate-pulse w-5/6"></div>
          <div className="h-4 bg-muted rounded animate-pulse w-4/6"></div>
        </div>
      </section>

      {/* Breeder Cats Grid Skeleton */}
      <section>
        <GridSkeleton 
          count={6} 
          columns={{ mobile: 1, tablet: 2, desktop: 3 }}
          imageHeight="aspect-video"
        />
      </section>
    </>
  );
}

