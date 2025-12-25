export default function StatSparkCard({
  dot = "blue",
  value,
  label,
  color = "#5E81F4",
}: {
  value: string;
  label: string;
  color?: string;
  dot?: "blue" | "grey" | "red";
}) {

  return (
    <div className="rounded-2xl bg-white px-6 py-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[20px] font-semibold text-[#1C1D21]">{value}</p>
          <p className="mt-1 text-[14px] text-[#A0A3BD]">{label}</p>
        </div>

        {/* Spark graph */}
        <svg
          width="120"
          height="44"
          viewBox="0 0 120 44"
          fill="none"
        >
          <path
            d="M2 28
               C16 14, 32 36, 48 18
               S76 8, 92 20
               S108 14, 118 32"
            stroke={color}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Dot on curve */}
          <circle
            cx="76"
            cy="8"
            r="3.5"
            fill={dot}
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}
