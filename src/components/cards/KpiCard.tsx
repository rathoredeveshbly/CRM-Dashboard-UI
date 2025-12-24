import { ArrowUp, ArrowDown } from "lucide-react";

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

  const Icon = trend === "up" ? ArrowUp : ArrowDown;

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm min-w-0">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4 min-w-0">
        {/* LEFT */}
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 truncate">
            {title}
          </p>
          <p className="text-xs text-slate-500 mt-1 line-clamp-2">
            {subtitle}
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0">
          <p className="font-semibold text-slate-900 whitespace-nowrap text-base sm:text-lg">
            {value}
          </p>
          <Icon className="h-4 w-4 text-emerald-500 shrink-0" />
        </div>
      </div>

      <div className="mt-4 h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
        <div className={`h-1.5 rounded-full ${bar}`} style={{ width: "72%" }} />
      </div>
    </div>
  );
}
