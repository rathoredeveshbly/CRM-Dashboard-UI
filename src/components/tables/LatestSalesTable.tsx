"use client";
import Image from "next/image";
import SectionHeader from "@/components/common/SectionHeader";
import { SALES } from "@/data/data";
import { useState } from "react";
import { Sale } from "@/types/type";

export default function LatestSalesTable() {
  const [tab, setTab] = useState("day");
  return (
    <div className="rounded-2xl bg-white shadow-sm overflow-hidden w-full">
      {/* Header */}
      <div className="px-6 py-5">
        <SectionHeader
          title="Latest sales"
          activeKey={tab}
          onChange={setTab}
        />
      </div>

      {/* Make ONLY table scrollable if needed */}
      <div className="mt-4 w-full min-w-0 overflow-x-auto">
        <table className="w-[980px] lg:w-full text-sm">
          {/* Table Head */}
          <thead className="bg-[#F6F7FB]">
            <tr className="text-[14px] font-semibold text-[#7A7AA7]">
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Delivery</th>
              <th className="px-6 py-4 text-right">Shipping</th>
              <th className="px-6 py-4 text-right">Total</th>
              <th className="px-6 py-4 text-right">Status</th>
            </tr>
          </thead>
          {/* Rows */}
          <tbody className="divide-y divide-[#EEF0F6]">
            {SALES.map((s) => (
              <tr key={s.customer + s.product} className="align-middle">
                {/* Product */}
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

                {/* Customer */}
                <td className="px-6 py-4">
                  <div className="text-[16px] font-semibold text-[#1C1D21]">{s.customer}</div>
                  <div className="mt-1 text-[14px] text-[#A0A3BD]">{s.email}</div>
                </td>

                {/* Delivery */}
                <td className="px-6 py-4">
                  <div className="text-[16px] font-semibold text-[#1C1D21]">{s.country}</div>
                  <div className="mt-1 text-[14px] text-[#A0A3BD] max-w-[360px] truncate">
                    {s.address}
                  </div>
                </td>

                {/* Shipping */}
                <td className="px-6 py-4 text-right text-[16px] font-semibold text-[#1C1D21]">
                  {s.shipping}
                </td>

                {/* Total */}
                <td className="px-6 py-4 text-right text-[16px] font-semibold text-[#1C1D21]">
                  {s.total}
                </td>

                {/* Status */}
                <td className="px-6 py-4 text-right">
                  <span className={statusBadge(s.status)}>{s.status}</span>
                </td>
              </tr>
            ))}
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