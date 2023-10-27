"use client"; // Error components must be Client Components

import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { toast } = useToast();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    //Display a toast
    toast({
      title: "You re not logged",
      description: "You must be logged in to access this page.",
    })
  );
}
