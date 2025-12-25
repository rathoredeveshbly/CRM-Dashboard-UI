"use client";

import Image from "next/image";
import { ResponsiveContainer, AreaChart, Area, XAxis, CartesianGrid, Tooltip } from "recharts";
import { useEffect, useMemo, useRef, useState } from "react";
import { filterFromDateToToday } from "../utils/dateFilter";

const data = [
  { m: "Jan", v: 26, createdAt: "2025-01-15" },
  { m: "Feb", v: 20, createdAt: "2025-02-15" },
  { m: "Mar", v: 12, createdAt: "2025-03-15" },
  { m: "Apr", v: 28, createdAt: "2025-04-15" },
  { m: "Jun", v: 18, createdAt: "2025-06-15" },
];

export default function PlannedIncomeCard() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [draftFromDate, setDraftFromDate] = useState<string>("");
  const [appliedFromDate, setAppliedFromDate] = useState<string>("");

  const popRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!popRef.current) return;
      if (!popRef.current.contains(e.target as Node)) setIsCalendarOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsCalendarOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const chartData = useMemo(() => {
    const all = [...data].sort(
      (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    if (appliedFromDate) {
      return filterFromDateToToday(all, appliedFromDate, (p) => p.createdAt);
    }
    return all;
  }, [appliedFromDate]);

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between relative" ref={popRef}>
        <p className="text-sm font-semibold text-slate-900">Planned Income</p>

        <button
          type="button"
          onClick={() => {
            setDraftFromDate(appliedFromDate);
            setIsCalendarOpen((v) => !v);
          }}
          className="h-9 w-9 rounded-sm bg-slate-100 grid place-items-center text-slate-500 hover:bg-slate-200 transition"
          aria-label="calendar"
        >
          <Image src={"/calender.svg"} alt="calender" width={20} height={20} className="h-4 w-4" />
        </button>

        {isCalendarOpen && (
          <div className="absolute right-0 top-11 z-20 w-[280px] rounded-2xl bg-white shadow-xl border border-[#E5E7F2] p-4">
            <p className="text-[12px] font-semibold text-[#6B6F91]">From date</p>

            <input
              type="date"
              value={draftFromDate}
              onChange={(e) => setDraftFromDate(e.target.value)}
              className="mt-2 w-full h-10 rounded-xl border border-[#E5E7F2] px-3 text-[13px] text-[#1C1D21] outline-none"
            />

            <p className="mt-2 text-[11px] text-[#A0A3BD]">Chart will filter only after you click Done.</p>

            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setDraftFromDate("");
                  setAppliedFromDate("");
                  setIsCalendarOpen(false);
                }}
                className="h-10 flex-1 rounded-xl bg-[#F0F0F3] text-[#1C1D21] font-semibold text-[13px] hover:bg-[#E0E2EB] transition"
              >
                Clear
              </button>

              <button
                type="button"
                onClick={() => {
                  setAppliedFromDate(draftFromDate);
                  setIsCalendarOpen(false);
                }}
                disabled={!draftFromDate}
                className={[
                  "h-10 flex-1 rounded-xl font-semibold text-[13px] transition",
                  !draftFromDate
                    ? "bg-[#A0A3BD] text-white cursor-not-allowed"
                    : "bg-[#5E81F4] text-white hover:bg-[#4B6FDB]",
                ].join(" ")}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ left: 8, right: 8, top: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 6" vertical />
            <XAxis dataKey="m" tickLine={false} axisLine={false} />
            <Tooltip content={<PrettyTooltip />} />
            <Area
              type="monotone"
              dataKey="v"
              stroke="#6366f1"
              fill="#6366f1"
              fillOpacity={0.06}
              strokeWidth={2}
              strokeDasharray="6 6"
              dot={{ r: 5 }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {chartData.length === 0 && (
        <div className="mt-3 text-center text-[13px] text-[#6B6F91]">No data found in selected range.</div>
      )}
    </div>
  );
}

function PrettyTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-2xl bg-white shadow-lg border border-slate-100 px-4 py-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-sm font-semibold text-slate-900">${(payload?.[0]?.value ?? 0).toFixed(2)}</p>
    </div>
  );
}
