import AuthHeader from "../components/auth-header";
import Footer from "../components/footer";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-[100vh]">
      <AuthHeader />
      <main className="container mx-auto px-4">{children}</main>
      <Footer/>
    </div>
  );
}
