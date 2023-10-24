import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Alert className="my-8">
        <AlertTriangle />
        <AlertTitle className="ml-4">Not found</AlertTitle>
        <AlertDescription className="ml-4">Post not found.</AlertDescription>
        <Link
          href="/"
          className={(buttonVariants({ variant: "link" }), "ml-4")}
        >
          Home
        </Link>
      </Alert>
    </div>
  );
}
