"use client";

import { useSession } from "next-auth/react";
import React from "react";

const ProfileAvatar = () => {
  const { data: session } = useSession();
  return (
    <div className="w-10 h-10 text-2xl rounded-full bg-black text-white flex items-center justify-center font-bold capitalize">
      {session && session.user?.email?.[0]}
    </div>
  );
};

export default ProfileAvatar;
