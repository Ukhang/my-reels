import Sidebar from "../components/sidebar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen">
      <Sidebar />
      <main className="flex-1 lg:ml-56 sm:ml-[74px] ml-[60px] h-screen overflow-hidden">{children}</main>
    </div>
  );
}
