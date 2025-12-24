"use client";

import Image from "next/image";
import { ResponsiveContainer, AreaChart, Area, XAxis, CartesianGrid } from "recharts";

const data = [
  { m: "Jan", v: 26 },
  { m: "Feb", v: 20 },
  { m: "Mar", v: 12 },
  { m: "Apr", v: 28 },
  { m: "Jun", v: 18 },
];

export default function PlannedIncomeCard() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-900">Planned Income</p>
        <div className="h-9 w-9 rounded-sm bg-slate-100 grid place-items-center text-slate-500">
          <Image src={'/calender.svg'} alt="calender" width={20} height={20} className="h-4 w-4"/>
        </div>
      </div>

      <div className="mt-4 h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: 8, right: 8, top: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 6" vertical />
            <XAxis dataKey="m" tickLine={false} axisLine={false} />
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
    </div>
  );
}
