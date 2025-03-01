import "./globals.css";
import localFont from 'next/font/local';
import Providers from "./components/providers";
import { Toaster } from "@/components/ui/sonner"

const sansSerif = localFont({
  src: './fonts/sans-serif/variable/Leggibilmente.ttf',
  display: 'swap',
  variable: '--font-pretendard',
});

export const metadata = {
  title: "My Reels - Start sharing reels today",
  description: "Join my-reels and start sharing your reels today.",
  icons: "/images/logo.png"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sansSerif.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}