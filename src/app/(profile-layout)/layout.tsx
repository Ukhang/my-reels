import Sidebar from "../components/sidebar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-56 h-screen overflow-hidden">{children}</main>
    </div>
  );
}
