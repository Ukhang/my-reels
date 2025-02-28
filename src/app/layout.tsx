import "./globals.css";
import localFont from 'next/font/local';
import Providers from "./components/providers";

const pretendard = localFont({
  src: './fonts/pretendard/public/variable/PretendardVariable.ttf',
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
      <body className={pretendard.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}