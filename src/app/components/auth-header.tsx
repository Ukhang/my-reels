import Image from "next/image";
import Link from "next/link";

const AuthHeader = () => {
  return (
    <header className="w-full bg-white fixed top-0 z-[999] border-b">
      <nav className="container mx-auto px-4 sm:py-4 py-3">
        <Link href={"/"} className="flex items-center gap-2 font-semibold text-lg">
          <Image src={"/images/logo.svg"} alt="logo" width={30} height={30} />
          My Reels
        </Link>
      </nav>
    </header>
  );
};

export default AuthHeader;
