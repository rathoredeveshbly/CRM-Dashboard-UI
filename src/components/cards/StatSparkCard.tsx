import Image from "next/image";

export default function StatSparkCard({
  value,
  label,
  dot = "blue", // optional small dot on spark line like design
}: {
  value: string;
  label: string;
  dot?: "blue" | "green" | "red";
}) {
  const dotClass =
    dot === "green" ? "bg-emerald-400" : dot === "red" ? "bg-rose-400" : "bg-[#5E81F4]";

  return (
    <div className="rounded-2xl bg-white px-6 py-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[18px] font-semibold text-[#1C1D21]">{value}</p>
          <p className="mt-1 text-[14px] text-[#A0A3BD]">{label}</p>
        </div>

        <div className="relative h-[42px] w-[140px]">
          <Image
            src={"/dashbord2Icons/spark.svg"}
            alt="sparkline"
            width={100}
            height={100}
          />
          {/* optional dot */}
          <span
            className={`absolute right-[46px] top-[9px] h-2.5 w-2.5 rounded-full ${dotClass}`}
          />
        </div>
      </div>
    </div>
  );
}
