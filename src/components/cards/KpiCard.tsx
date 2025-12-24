import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function KpiCard({
  title,
  subtitle,
  value,
  tone,
  trend,
}: {
  title: string;
  subtitle: string;
  value: string;
  tone: "green" | "blue" | "red";
  trend: "up" | "down";
}) {
  const bar =
    tone === "green"
      ? "bg-emerald-400"
      : tone === "blue"
      ? "bg-blue-500"
      : "bg-rose-400";

  const Icon = trend === "up" ? ArrowUpRight : ArrowDownRight;

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold text-slate-900">{value}</p>
          <Icon className="h-4 w-4 text-emerald-500" />
        </div>
      </div>

      <div className="mt-4 h-1.5 w-full rounded-full bg-slate-100">
        <div className={`h-1.5 rounded-full ${bar}`} style={{ width: "72%" }} />
      </div>
    </div>
  );
}
