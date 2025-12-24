'use client';
import Image from "next/image";

type Tab = { key: string; label: string };

type Props = {
  title: string;
  activeKey: string;
  onChange?: (key: string) => void;
  tabs?: Tab[];
  rightIconSrc?: string;
  rightIconAlt?: string;
};

const defaultTabs: Tab[] = [
  { key: "day", label: "Day" },
  { key: "week", label: "Week" },
  { key: "month", label: "Month" },
];

export default function SectionHeader({
  title,
  activeKey,
  onChange,
  tabs = defaultTabs,
  rightIconSrc = "/calender.svg",
  rightIconAlt = "calendar",
}: Props) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-[18px] font-semibold text-[#1C1D21]">{title}</p>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-[14px]">
          {tabs.map((t) => {
            const isActive = t.key === activeKey;

            return (
              <button
                key={t.key}
                type="button"
                onClick={() => onChange?.(t.key)}
                aria-pressed={isActive}
                className={[
                  "h-10 px-5 rounded-xl font-semibold transition",
                  isActive
                    ? "border border-[#E5E7F2] bg-white text-[#1C1D21]"
                    : "text-[#A0A3BD] hover:text-[#1C1D21]",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="h-9 w-9 rounded-sm bg-[#F0F0F3] grid place-items-center">
          <Image
            src={rightIconSrc}
            alt={rightIconAlt}
            width={20}
            height={20}
            className="h-4 w-4"
          />
        </div>
      </div>
    </div>
  );
}
