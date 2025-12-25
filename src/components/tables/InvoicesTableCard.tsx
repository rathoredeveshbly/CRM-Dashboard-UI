"use client";

import Image from "next/image";
import SectionHeader from "../common/SectionHeader";
import { useEffect, useMemo, useRef, useState } from "react";
import { INVOICES_DATA } from "@/data/data";
import { Invoice } from "@/types/type";
import { filterFromDateToToday } from "../utils/dateFilter";

export default function InvoicesTableCard() {
  const [tab, setTab] = useState("month");
  const [showAll, setShowAll] = useState(false);

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
    if (showAll) return INVOICES_DATA;

    if (appliedFromDate) {
      return filterFromDateToToday(INVOICES_DATA, appliedFromDate, (i) => i.createdAt);
    }

    const now = new Date();
    const start = new Date(now);
    if (tab === "day") start.setDate(now.getDate() - 1);
    if (tab === "week") start.setDate(now.getDate() - 7);
    if (tab === "month") start.setMonth(now.getMonth() - 1);

    return INVOICES_DATA.filter((inv) => {
      const created = inv.createdAt ? new Date(inv.createdAt) : null;
      if (!created) return true;
      return created >= start && created <= now;
    });
  }, [tab, appliedFromDate, showAll]);

  return (
    <div className="rounded-2xl bg-white shadow-sm overflow-hidden">
      <div className="px-6 py-5">
        <div className="relative" ref={popRef}>
          <SectionHeader
            title="Invoices"
            activeKey={tab}
            onChange={(key) => {
              setTab(key);
              setShowAll(false);
              setAppliedFromDate("");
              setDraftFromDate("");
              setIsCalendarOpen(false);
            }}
            onRightIconClick={() => {
              setShowAll(false);
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
                Invoices will filter only after you click Done.
              </p>

              <div className="mt-3 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setDraftFromDate("");
                    setAppliedFromDate("");
                    setShowAll(false);
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
                    setShowAll(false);
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

      <div className="grid grid-cols-[1fr_140px] gap-4 bg-[#F6F7FB] px-6 py-4 text-[12px] font-semibold text-[#6B6F91]">
        <p>Number</p>
        <p className="text-right">Details</p>
      </div>

      <div className="px-6">
        <div className="divide-y divide-slate-100">
          {rows.map((inv) => (
            <div key={inv.id} className="grid grid-cols-[1fr_140px] gap-4 py-5">
              <div className="flex items-start gap-4 min-w-0">
                <div className="h-12 w-12 rounded-xl bg-[#EEF2FF] grid place-items-center shrink-0">
                  <Image src={inv.icon} alt={inv.title} width={18} height={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-[14px] font-semibold text-[#1C1D21] truncate">{inv.title}</p>
                  <p className="mt-1 text-[12px] text-[#A0A3BD] truncate">{inv.company}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-[14px] font-semibold text-[#1C1D21]">{inv.amount}</p>
                <p className={invoiceStatus(inv.status)}>{inv.status}</p>
              </div>
            </div>
          ))}

          {rows.length === 0 && (
            <div className="py-10 text-center text-[13px] text-[#6B6F91]">
              No invoices found in selected range.
            </div>
          )}
        </div>

        <div className="flex items-center gap-4 py-5">
          <button
            type="button"
            onClick={() => {
              setShowAll(true);
              setAppliedFromDate("");
              setDraftFromDate("");
              setIsCalendarOpen(false);
            }}
            className="h-12 px-8 rounded-xl bg-[#5E81F4] text-white font-semibold text-[14px] cursor-pointer hover:bg-[#4B6FDB] transition"
          >
            All Invoices
          </button>
          <p className="text-[13px] text-[#6B6F91]">
            <span className="font-semibold">{INVOICES_DATA.length}</span> Total Invoices
          </p>
        </div>
      </div>
    </div>
  );
}

function invoiceStatus(s: Invoice["status"]) {
  if (s === "Paid") return "mt-1 text-[12px] font-semibold text-[#28C76F]";
  if (s === "Pending" || s === "Processing") return "mt-1 text-[12px] font-semibold text-[#FFB020]";
  return "mt-1 text-[12px] font-semibold text-[#5E81F4]";
}