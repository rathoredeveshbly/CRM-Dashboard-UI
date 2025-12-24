import { BARS, DASHBOARD_2_EVENTS, DASHBOARD_3_EVENTS, DASHBOARD_3_UPDATES } from "@/data/data";
import { DotColor, EventItem } from "@/types/type";
import Image from "next/image";


export default function ActivityList({ mode }: { mode: "dashboard-2" | "dashboard-3" }) {
  return mode === "dashboard-2" ? <Dashboard2Left /> : <Dashboard3Left />;
}

/* ---------------- Dashboard 3 ---------------- */

function Dashboard3Left() {
  return (
    <div className="space-y-10">
      <div>
        <SectionTitle>Latest updates</SectionTitle>

        <div className="mt-4 space-y-4">
          {DASHBOARD_3_UPDATES.map((u) => (
            <UpdateRow
              key={u.id}
              icon={
                <Image
                  src={u.iconSrc}
                  alt={u.iconAlt}
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              }
              title={u.title}
              right={u.right}
            />
          ))}
        </div>
      </div>

      <div>
        <SectionTitle>Upcoming events</SectionTitle>

        <div className="mt-4 space-y-4">
          {DASHBOARD_3_EVENTS.map((e) => (
            <EventRow key={e.id} {...e} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Dashboard 2 ---------------- */

function Dashboard2Left() {
  return (
    <div className="space-y-10">
      <div>
        <SectionTitle>Upcoming events</SectionTitle>

        <div className="mt-4 space-y-4">
          {DASHBOARD_2_EVENTS.map((e) => (
            <EventRow key={e.id} {...e} />
          ))}
        </div>
      </div>

      <ConversionHistory />
    </div>
  );
}

/* ---------------- Reusable Parts ---------------- */

function ConversionHistory() {
  return (
    <div className="rounded-2xl bg-[#F6F7FB] p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[18px] font-semibold text-[#1C1D21]">Conversion history</p>
          <p className="mt-2 text-[14px] text-[#A0A3BD]">Week to week performance</p>
        </div>

        <button
          className="shrink-0 grid h-12 w-12 place-items-center rounded-2xl bg-[#F0F0F3]"
          aria-label="Open chart"
          type="button"
        >
          <Image src="/wave.svg" alt="chart" width={20} height={20} className="h-5 w-5" />
        </button>
      </div>

      {/* ✅ WHITE chart container */}
      <div className="mt-6 rounded-2xl px-8 py-8">
        <div className="flex h-[120px] items-end justify-between">
          {BARS.map((b) => (
            <div key={b.id} className="flex items-end gap-[8px]">
              <div className="w-[4px] rounded-full bg-[#5E81F4]" style={{ height: `${b.blue}px` }} />
              <div className="w-[4px] rounded-full bg-[#6BCB77]" style={{ height: `${b.green}px` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-[13px] font-semibold text-[#1C1D21]">{children}</p>;
}

function UpdateRow({
  icon,
  title,
  right,
}: {
  icon: React.ReactNode;
  title: string;
  right: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-[#F6F7FB] px-5 py-5">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-xl bg-[#EEF2FF] grid place-items-center">
          {icon}
        </div>
        <p className="text-[13px] font-semibold text-[#1C1D21]">{title}</p>
      </div>

      <p className="text-[12px] font-medium text-[#A0A3BD]">{right}</p>
    </div>
  );
}

import { MoreHorizontal } from "lucide-react";

function EventRow({ time, title, desc, dot }: EventItem & { dot: DotColor }) {
  const dotClass =
    dot === "blue" ? "bg-[#5E81F4]" : dot === "amber" ? "bg-[#FFB020]" : "bg-[#28C76F]";

  const timeColor =
    dot === "blue" ? "text-[#5E81F4]" : dot === "amber" ? "text-[#FFB020]" : "text-[#28C76F]";

  return (
    <div className="rounded-2xl bg-[#F6F7FB] px-5 py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${dotClass}`} />
          <span className={`text-[12px] font-semibold ${timeColor}`}>{time}</span>
        </div>

        {/* ✅ three dots */}
        <button
          type="button"
          aria-label="More"
          className="grid h-8 w-8 place-items-center rounded-xl text-[#A0A3BD] hover:bg-white/60"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      <p className="mt-3 text-[13px] font-semibold text-[#1C1D21]">{title}</p>
      <p className="mt-1 text-[12px] text-[#A0A3BD]">{desc}</p>
    </div>
  );
}
