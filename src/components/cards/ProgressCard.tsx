export default function ProgressCard({
  title,
  value,
}: {
  title: string;
  value: string;
  trend: "up" | "down";
  color: "green" | "blue" | "red";
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
      <div className="h-1 bg-slate-200 rounded mt-3">
        <div className="h-1 bg-emerald-500 rounded w-3/4" />
      </div>
    </div>
  );
}
