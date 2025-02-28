import AuthHeader from "../components/auth-header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <AuthHeader />
      <main className="container mx-auto px-4">{children}</main>
    </div>
  );
}
