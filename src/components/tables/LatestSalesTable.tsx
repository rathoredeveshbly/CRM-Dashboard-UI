"use client";

import Image from "next/image";
import SectionHeader from "@/components/common/SectionHeader";
import { SALES_DATA } from "@/data/data";
import { useEffect, useMemo, useRef, useState } from "react";
import { Sale } from "@/types/type";
import { filterFromDateToToday } from "../utils/dateFilter";

export default function LatestSalesTable() {
  const [tab, setTab] = useState("month");

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [draftFromDate, setDraftFromDate] = useState<string>("");
  const [appliedFromDate, setAppliedFromDate] = useState<string>("");

  const popRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!popRef.current) return;
      if (!popRef.current.contains(e.target as Node)) setIsCalendarOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsCalendarOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const rows = useMemo(() => {
    if (appliedFromDate) {
      return filterFromDateToToday(SALES_DATA, appliedFromDate, (s) => s.createdAt);
    }

    const now = new Date();
    const start = new Date(now);
    if (tab === "day") start.setDate(now.getDate() - 1);
    if (tab === "week") start.setDate(now.getDate() - 7);
    if (tab === "month") start.setMonth(now.getMonth() - 1);

    return SALES_DATA.filter((s) => {
      const created = s.createdAt ? new Date(s.createdAt) : null;
      if (!created) return true;
      return created >= start && created <= now;
    });
  }, [tab, appliedFromDate]);

  return (
    <div className="rounded-2xl bg-white shadow-sm overflow-hidden w-full">
      <div className="px-6 py-5">
        <div className="relative" ref={popRef}>
          <SectionHeader
            title="Latest sales"
            activeKey={tab}
            onChange={(key) => {
              setTab(key);
              setAppliedFromDate("");
              setDraftFromDate("");
              setIsCalendarOpen(false);
            }}
            onRightIconClick={() => {
              setDraftFromDate(appliedFromDate);
              setIsCalendarOpen((v) => !v);
            }}
          />

          {isCalendarOpen && (
            <div className="absolute right-0 mt-3 z-20 w-[280px] rounded-2xl bg-white shadow-xl border border-[#E5E7F2] p-4">
              <p className="text-[12px] font-semibold text-[#6B6F91]">From date</p>

              <input
                type="date"
                value={draftFromDate}
                onChange={(e) => setDraftFromDate(e.target.value)}
                className="mt-2 w-full h-10 rounded-xl border border-[#E5E7F2] px-3 text-[13px] text-[#1C1D21] outline-none"
              />

              <p className="mt-2 text-[11px] text-[#A0A3BD]">
                Sales will filter only after you click Done.
              </p>

              <div className="mt-3 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setDraftFromDate("");
                    setAppliedFromDate("");
                    setIsCalendarOpen(false);
                  }}
                  className="h-10 flex-1 rounded-xl bg-[#F0F0F3] text-[#1C1D21] font-semibold text-[13px] hover:bg-[#E0E2EB] transition"
                >
                  Clear
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setAppliedFromDate(draftFromDate);
                    setIsCalendarOpen(false);
                  }}
                  disabled={!draftFromDate}
                  className={[
                    "h-10 flex-1 rounded-xl font-semibold text-[13px] transition",
                    !draftFromDate
                      ? "bg-[#A0A3BD] text-white cursor-not-allowed"
                      : "bg-[#5E81F4] text-white hover:bg-[#4B6FDB]",
                  ].join(" ")}
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 w-full min-w-0 overflow-x-auto">
        <table className="min-w-[900px] w-full text-sm">
          <thead className="bg-[#F6F7FB]">
            <tr className="text-[14px] font-semibold text-[#7A7AA7]">
              <th className="px-6 py-4 text-left">Product</th>
              <th className="px-3 py-1 text-left">Customer</th>
              <th className="px-3 py-1 text-left">Delivery</th>
              <th className="px-2 py-1 text-right">Shipping</th>
              <th className="px-2 py-1 text-right">Total</th>
              <th className="px-2 py-1 text-right">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#EEF0F6]">
            {rows.map((s) => (
              <tr key={s.customer + s.productId} className="align-middle">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-[#F6F7FB] shrink-0">
                      <Image src={s.productImg} alt={s.product} width={20} height={20} className="h-14 w-14" />
                    </div>

                    <div>
                      <div className="text-[16px] font-semibold text-[#1C1D21]">{s.product}</div>
                      <div className="mt-1 text-[14px] text-[#A0A3BD]">{s.productId}</div>
                    </div>
                  </div>
                </td>

                <td className="px-3 py-1">
                  <div className="text-[16px] font-semibold text-[#1C1D21]">{s.customer}</div>
                  <div className="mt-1 text-[14px] text-[#A0A3BD]">{s.email}</div>
                </td>

                <td className="px-3 py-1">
                  <div className="text-[16px] font-semibold text-[#1C1D21]">{s.country}</div>
                  <div className="mt-1 text-[14px] text-[#A0A3BD] max-w-[360px] truncate">{s.address}</div>
                </td>

                <td className="px-2 py-1 text-right text-[16px] font-semibold text-[#1C1D21]">{s.shipping}</td>
                <td className="px-2 py-1 text-right text-[16px] font-semibold text-[#1C1D21]">{s.total}</td>

                <td className="px-2 py-1 text-right">
                  <span className={statusBadge(s.status)}>{s.status}</span>
                </td>
              </tr>
            ))}

            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-[13px] text-[#6B6F91]">
                  No sales found in selected range.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function statusBadge(status: Sale["status"]) {
  const base =
    "inline-flex items-center justify-center h-10 px-6 rounded-2xl text-[14px] font-semibold";
  if (status === "Shipped") return `${base} bg-[#ECFDF3] text-[#28C76F]`;
  return `${base} bg-[#FFF7E6] text-[#FFB020]`;
}