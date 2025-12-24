"use client";
import { ResponsiveContainer, AreaChart, Area, Line, XAxis, Tooltip, CartesianGrid } from "recharts";
import SectionHeader from "@/components/common/SectionHeader";
import { useState } from "react";
import { MONTHS_DATA } from "@/data/data";



export default function OrdersChartCard() {
  const [tab, setTab] = useState("day");
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <SectionHeader
        title="Orders"
        activeKey={tab}
        onChange={setTab}
      />

      <div className="mt-4 h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={MONTHS_DATA} margin={{ left: 8, right: 8, top: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 6" vertical />
            <XAxis dataKey="m" tickLine={false} axisLine={false} />
            <Tooltip content={<PrettyTooltip />} />
            <Area type="monotone" dataKey="a" stroke="#34d399" fill="#34d399" fillOpacity={0.08} strokeWidth={2} />
            <Line type="monotone" dataKey="b" stroke="#2563eb" strokeWidth={2} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function Tab({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button
      className={[
        "h-9 px-4 rounded-xl text-sm font-semibold",
        active ? "bg-white border border-slate-200 shadow-sm" : "text-slate-500 hover:bg-slate-50",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function PrettyTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-2xl bg-white shadow-lg border border-slate-100 px-4 py-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-sm font-semibold text-slate-900">${(payload?.[0]?.value ?? 0).toFixed(3)}</p>
    </div>
  );
}