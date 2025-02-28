"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      toast(result.error);
    } else {
      toast("Login successful!");
      router.push("/");
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 pt-4 py-8 place-items-center mt-24">
      <div className="w-full max-w-sm">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={50}
          height={50}
          className="mb-2"
        />
        <h2 className="font-semibold text-2xl">Share with Strangers.</h2>
        <p className="text-xl font-semibold text-gray-400">
          Join my-reels and start sharing your reels today.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-2 w-full"
        >
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm text-gray-400">
              Email
            </label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="text-sm text-gray-400">
              Password
            </label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full mt-4">
            Login
          </Button>
          <p className="text-center mt-2 text-neutral-400">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="hover:text-blue-500 underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
