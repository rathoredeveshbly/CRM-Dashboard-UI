import { NAVBAR_ITEMS } from "@/data/data";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-16 bg-white border-r flex flex-col items-center py-4">
      {/* Top logo */}
      <div className="h-10 w-10 mt-4 rounded-2xl bg-blue-600/10 grid place-items-center">
        <Image src="/logo.svg" alt="logo" width={18} height={18} className="h-[18px] w-[18px]" />
      </div>

      {/* Nav */}
      <nav className="mt-6 flex flex-col items-center gap-3">
        {NAVBAR_ITEMS.map((item) => (
          <button
            key={item.key}
            className={[
              "relative h-11 w-11 rounded-xl grid place-items-center transition",
              item.active ? "bg-slate-100" : "hover:bg-slate-50",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60",
            ].join(" ")}
            aria-label={item.alt}
          >
            <Image src={item.src} alt={item.alt} width={20} height={20} className="h-5 w-5" />

            {/* Active vertical indicator line on RIGHT (color #5E81F4) */}
            {item.active && (
              <span
                className="absolute right-[-10px] top-1/2 h-10 w-[3px] -translate-y-1/2 rounded-full"
                style={{ backgroundColor: "#5E81F4" }}
              />
            )}
          </button>
        ))}

      </nav>

      {/* Bottom profile */}
      <div className="mt-auto pt-4 pb-4">
        <div className="relative h-10 w-10">
          <Image
            src="/profile.svg"
            alt="profile"
            width={40}
            height={40}
            className="h-10 w-10 rounded-sm bg-slate-100"
          />

          {/* Online icon */}
          <span className="absolute -right-[1px] -bottom-[1px] h-2 w-2 rounded-full bg-emerald-500" />
        </div>
      </div>
    </aside>
  );
}