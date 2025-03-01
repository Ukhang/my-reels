import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-1 mt-auto pb-6 text-gray-400">
        Made with <Heart size={14}/> by <Link href="https://x.com/UkhangM45926" target="_blank" className="underline hover:text-blue-500">Ukhang</Link>
    </footer>
  )
}

export default Footer;
