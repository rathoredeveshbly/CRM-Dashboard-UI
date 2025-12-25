import Topbar from "@/components/layout/Topbar";

export default function DashboardShell({
  left,
  children,
}: {
  left: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0 min-h-screen grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)]">
      <aside className="min-w-0 bg-[#F6F7FB] lg:border-r lg:border-[#E6E8F0] flex">
        <div className="bg-white px-5 py-6 sm:px-6 lg:px-8 lg:py-6 flex flex-col w-full">
          {left}
        </div>
      </aside>

      {/* Main content */}
      <section className="min-w-0 px-4x pt-4 sm:px-6">
        <Topbar />
        <div className="mt-2 min-w-0">{children}</div>
      </section>
    </div>
  );
}