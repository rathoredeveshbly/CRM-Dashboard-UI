import Sidebar from "@/components/layout/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#E6E8F0] p-6">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-[#F6F7FB] shadow-sm">
        <div className="flex">
          {/* Left icon rail */}
          <Sidebar />

          {/* ✅ No px here, so no gap after sidebar */}
          <div className="min-w-0 flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
