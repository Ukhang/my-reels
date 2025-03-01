"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {

    const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h2 className="font-semibold text-2xl max-w-xs text-center">404 - Page Not Found</h2>
      <p className="text-xl font-semibold text-gray-400 max-w-xs text-center">
        The page you are looking for does not exist.
      </p>
      <Button className="mt-4" onClick={() => router.push("/")}>Go Back</Button>
    </div>
  );
}
