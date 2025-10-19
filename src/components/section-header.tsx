// Reusable section header component
import { motion } from "framer-motion";
import { SCROLL_ANIMATION } from "@/constants";

type Props = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export function SectionHeader({ title, subtitle, centered = true }: Props) {
  return (
    <motion.div
      {...SCROLL_ANIMATION}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

