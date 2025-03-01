"use client";

import VideoUploadForm from "@/app/components/video-upload-form";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function VideoUploadPage() {
  const { data: session } = useSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen">
      <VideoUploadForm />
    </div>
  );
}