"use client";

import { useSession } from "next-auth/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertDialogFooter } from "@/components/ui/alert-dialog";
import ProfileAvatar from "@/app/components/profile-avatar";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center gap-2">
        <ProfileAvatar/>  
        <span className="font-medium">
          {session && session.user?.email?.split("@")[0]}
        </span>
      </div>

      <Alert className="mt-8 max-w-md">
        <AlertTitle>Thanks for joining My Reels! 🎉</AlertTitle>
        <AlertDescription>
          I’m still working on building and improving the app, so your patience
          and support mean a lot to me. Stay tuned for exciting updates and new
          features as I continue to make My Reels even better.
        </AlertDescription>
        <AlertDialogFooter>
        I’m thrilled to have you here! 💜
        </AlertDialogFooter>
      </Alert>
    </div>
  );
}
