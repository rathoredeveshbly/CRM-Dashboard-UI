import KpiCard from "@/components/cards/KpiCard";
import StatSparkCard from "@/components/cards/StatSparkCard";

type KpiItem =
  | {
      type: "statSpark";
      value: string;
      label: string;
      sparkSrc: string;
      dot?: "blue" | "green" | "red";
    }
  | {
      type: "kpi";
      title: string;
      value: string;
      subtitle: string;
      tone: "green" | "blue" | "red";
      trend: "up" | "down";
    };

export default function KpiRow({ items }: { items: KpiItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {items.map((it) =>
        it.type === "statSpark" ? (
          <StatSparkCard
            key={it.label}
            value={it.value}
            label={it.label}
            dot={it.dot}
          />
        ) : (
          <KpiCard
            key={it.title}
            title={it.title}
            subtitle={it.subtitle}
            value={it.value}
            tone={it.tone}
            trend={it.trend}
          />
        )
      )}
    </div>
  );
}