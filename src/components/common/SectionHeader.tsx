"use client";
import { DEFAULT_TABS } from "@/data/data";
import { sectionHeaderProps } from "@/types/type";
import Image from "next/image";

export default function SectionHeader({
  title,
  activeKey,
  onChange,
  tabs = DEFAULT_TABS,
  rightIconSrc = "/calender.svg",
  rightIconAlt = "calendar",
}: sectionHeaderProps) {
  return (
    <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {/* Title */}
      <p className="min-w-0 truncate text-[16px] sm:text-[18px] font-semibold text-[#1C1D21]">
        {title}
      </p>

      {/* Right controls */}
      <div className="flex min-w-0 items-center gap-3">
        {/* Tabs: scroll on small screens */}
        <div className="min-w-0 flex-1 overflow-x-auto">
          <div className="flex w-max items-center gap-2 text-[13px] sm:text-[14px] pr-2">
            {tabs.map((t) => {
              const isActive = t.key === activeKey;

              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => onChange?.(t.key)}
                  aria-pressed={isActive}
                  className={[
                    "shrink-0 rounded-xl font-semibold transition whitespace-nowrap",
                    "h-9 px-4 sm:h-10 sm:px-5",
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
        </div>

        {/* Right icon */}
        <button
          type="button"
          className="shrink-0 grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-sm bg-[#F0F0F3] hover:bg-[#E0E2EB] transition"
          aria-label={rightIconAlt}
        >
          <Image
            src={rightIconSrc}
            alt={rightIconAlt}
            width={20}
            height={20}
            className="h-4 w-4"
          />
        </button>
      </div>
    </div>
  );
}