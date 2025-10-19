// Indeterminate linear progress bar component
// Based on Material Design guidelines: https://m2.material.io/components/progress-indicators

"use client";

import { motion } from "framer-motion";

type ProgressBarProps = {
  show?: boolean;
};

export function ProgressBar({ show = true }: ProgressBarProps) {
  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      <div className="relative h-full overflow-hidden bg-primary/10">
        {/* Primary indeterminate bar */}
        <motion.div
          className="absolute h-full bg-primary"
          initial={{ left: "-35%", right: "100%" }}
          animate={{
            left: ["−35%", "100%"],
            right: ["100%", "-90%"],
          }}
          transition={{
            duration: 2,
            ease: [0.65, 0.815, 0.735, 0.395],
            repeat: Infinity,
          }}
        />
        {/* Secondary indeterminate bar for smoother appearance */}
        <motion.div
          className="absolute h-full bg-primary/60"
          initial={{ left: "-200%", right: "100%" }}
          animate={{
            left: ["-200%", "100%"],
            right: ["100%", "-35%"],
          }}
          transition={{
            duration: 2,
            ease: [0.165, 0.84, 0.44, 1],
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>
    </div>
  );
}

