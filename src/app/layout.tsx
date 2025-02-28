import "./globals.css";
import localFont from 'next/font/local';
import Providers from "./components/providers";

const sansSerif = localFont({
  src: './fonts/sans-serif/variable/Leggibilmente.ttf',
  display: 'swap',
  variable: '--font-pretendard',
});

export const metadata = {
  title: "ImageKit Next.js Integration",
  description: "Demo of ImageKit integration with Next.js",
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
        </Providers>
      </body>
    </html>
  );
}