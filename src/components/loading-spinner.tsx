// Loading component with indeterminate progress bar
import { ProgressBar } from "./progress-bar";

type LoadingSpinnerProps = {
  message?: string;
  showMessage?: boolean;
};

export function LoadingSpinner({ message = "Loading...", showMessage = false }: LoadingSpinnerProps) {
  return (
    <>
      <ProgressBar show={true} />
      {showMessage && (
        <div className="min-h-screen py-12 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground animate-pulse">{message}</p>
          </div>
        </div>
      )}
    </>
  );
}

