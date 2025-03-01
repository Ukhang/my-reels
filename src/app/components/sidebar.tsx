"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, UploadCloud, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const sidebarLinks = [
  { href: "/", icon: <Home />, label: "For You" },
  { href: "/upload", icon: <UploadCloud />, label: "Upload" },
  { href: "/profile", icon: <User />, label: "Profile" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast("Signed out successfully");
    } catch {
      toast("Failed to sign out");
    }
  };

  return (
    <aside className="w-56 p-4 bg-white border-r flex flex-col fixed top-0 left-0 h-full">
      <Link
        href={"/"}
        className="flex items-center gap-2 font-semibold text-lg px-2 py-2"
        prefetch={true}
        onClick={() => toast("Welcome to My Reels!")}
      >
        <Image src={"/images/logo.png"} alt="logo" width={30} height={30} />
        My Reels
      </Link>
      <ul className="mt-4 flex flex-col gap-1 pb-6">
        {sidebarLinks.map((link, index) => (
          <li key={index} className="flex">
            <Link
              href={link.href}
              className={cn(
                "flex items-center gap-3 w-full px-2 py-2 rounded-md font-medium text-gray-400 hover:bg-main transition duration-200",
                {
                  "text-black": pathname === link.href, // If pathname matches href, text will be black
                }
              )}
            >
              {link.icon}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-auto pb-6">
        {session ? (
          <AlertDialog>
            <AlertDialogTrigger asChild className="w-full">
              <Button>Sign Out</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-sm">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to log out?
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel asChild>
                  <Button variant={"outline"}>Cancel</Button>
                </AlertDialogCancel>
                <AlertDialogAction asChild className="bg-none">
                  <Button onClick={handleSignOut}>Sign Out</Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ) : (
          <Button
            className="w-full"
            onClick={() => {
              router.push("/login");
            }}
          >
            Login
          </Button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
