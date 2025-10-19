// Loading spinner component
import { motion } from "framer-motion";

type LoadingSpinnerProps = {
  message?: string;
};

export function LoadingSpinner({ message = "Loading..." }: LoadingSpinnerProps) {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <div className="rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          </motion.div>
          <p className="text-muted-foreground">{message}</p>
        </div>
      </div>
    </div>
  );
}

