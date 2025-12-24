import Topbar from "@/components/layout/Topbar";

export default function DashboardShell({
  left,
  children,
}: {
  left: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-w-0 grid-cols-[360px_1fr]">
      {/* Left panel  */}
      <aside className="min-w-0 bg-[#F6F7FB]">
        <div className="h-full bg-white px-8 py-6">
          {left}
        </div>
      </aside>

      {/*  Main content padding */}
      <section className="min-w-0 px-6 pb-6 pt-5">
        <Topbar />
        <div className="mt-6">{children}</div>
      </section>
    </div>
  );
}
