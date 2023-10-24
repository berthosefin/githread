"use client"; // Error components must be Client Components

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Alert className="my-8">
      <AlertTriangle />
      <AlertTitle className="ml-4">
        Something went wrong. Please try again later.
      </AlertTitle>
      <AlertDescription className="ml-4">
        An error occurred while trying to process your request.
      </AlertDescription>
    </Alert>
  );
}
