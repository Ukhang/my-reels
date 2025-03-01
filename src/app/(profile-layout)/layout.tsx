export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-[100vh]">
        {children}
    </div>
  );
}