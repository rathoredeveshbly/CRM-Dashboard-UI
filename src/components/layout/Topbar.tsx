import { Menu, Search, CirclePlus } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-14 bg-slate-50 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          className="h-8 w-8 rounded-sm bg-[#f0f0f3] grid place-items-center text-slate-400 cursor-pointer hover:bg-[#e0e2eb] transition"
          aria-label="Open menu"
        >
          <Menu className="h-[14px] w-[14px]" />
        </button>
        <h2 className="text-[18px] text-[#1C1D21] font-[550]">Dashboard</h2>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button
          className="h-8 w-8 rounded-sm bg-[#f0f0f3] grid place-items-center text-slate-400 cursor-pointer hover:bg-[#e0e2eb] transition"
          aria-label="Search"
        >
          <Search className="h-[14px] w-[14px]" />
        </button>
        <button
          className="h-8 w-8 rounded-sm bg-[#f0f0f3] grid place-items-center text-slate-400 cursor-pointer hover:bg-[#e0e2eb] transition"
          aria-label="Add"
        >
          <CirclePlus className="h-[14px] w-[14px]" />
        </button>
      </div>
    </header>
  );
}