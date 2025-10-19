// Reusable page header component
import { motion } from "framer-motion";
import { SLIDE_UP } from "@/constants";

type Props = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export function PageHeader({ title, subtitle, children }: Props) {
  return (
    <motion.div
      {...SLIDE_UP}
      className="text-center mb-12"
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
}

