// Error display component
import { Button } from "@/components/ui/button";

type ErrorDisplayProps = {
  message: string;
  onRetry?: () => void;
};

export function ErrorDisplay({ message, onRetry }: ErrorDisplayProps) {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error: {message}</p>
          {onRetry && (
            <Button onClick={onRetry}>Try Again</Button>
          )}
        </div>
      </div>
    </div>
  );
}

