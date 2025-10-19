// Full page loading component with progress bar and optional skeletons
import { ProgressBar } from "./progress-bar";
import { type ReactNode } from "react";

type Props = {
  message?: string;
  showMessage?: boolean;
  skeleton?: ReactNode;
};

export function LoadingPage({ message = "Loading...", showMessage = false, skeleton }: Props) {
  return (
    <>
      <ProgressBar show={true} />
      {skeleton ? (
        <div className="min-h-screen py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {skeleton}
          </div>
        </div>
      ) : showMessage ? (
        <div className="min-h-screen py-12 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground animate-pulse">{message}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

