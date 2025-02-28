"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Registration failed");
      }

      toast("Registration successful! Please log in.");
      router.push("/login");
    } catch (error) {
      toast(error instanceof Error);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 py-8 place-items-center min-h-[100vh]">
      <Image
        src="/images/person.svg"
        alt="jumping man"
        width={300}
        height={300}
        className="hidden lg:block"
      />
      <div className="w-full max-w-sm">
        <h2 className="font-semibold text-2xl">Share Your Vision.</h2>
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
          <div className="space-y-1">
            <label htmlFor="confirm-password" className="text-sm text-gray-400">
              Confirm Password
            </label>
            <Input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full mt-4">
            Create an Account
          </Button>
          <p className="text-center mt-2 text-neutral-400">
            Already have an account?{" "}
            <Link href="/login" className="hover:text-blue-500 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
