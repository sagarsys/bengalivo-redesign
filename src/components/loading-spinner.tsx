// Loading component with indeterminate progress bar
import { ProgressBar } from "./progress-bar";

type Props = {
  message?: string;
  showMessage?: boolean;
};

export function LoadingSpinner({ message = "Loading...", showMessage = false }: Props) {
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

