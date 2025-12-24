"use client";
import Image from "next/image";
import SectionHeader from "../common/SectionHeader";
import { useState } from "react";
import { ORDERS_DATA } from "@/data/data";
import { Order } from "@/types/type";


export default function OrdersTableCard() {
  const [tab, setTab] = useState("day");
  return (
    <div className="rounded-2xl bg-white shadow-sm overflow-hidden">
      <div className="px-6 py-5">
      <SectionHeader title="Orders" activeKey={tab}
        onChange={setTab} />
      </div>

      {/* table header row */}
      <div className="grid grid-cols-[1fr_140px] gap-4 bg-[#F6F7FB] px-6 py-4 text-[12px] font-semibold text-[#6B6F91]">
        <p>Product</p>
        <p className="text-right">Details</p>
      </div>

      <div className="px-6">
        <div className="divide-y divide-slate-100">
          {ORDERS_DATA.map((o) => (
            <div key={o.id} className="grid grid-cols-[1fr_140px] gap-4 py-5">
              <div className="flex items-center gap-4 min-w-0">
                <div className="h-12 w-12 rounded-xl bg-[#F6F7FB] overflow-hidden shrink-0">
                  <Image src={o.img} alt={o.product} width={48} height={48} className="h-full w-full object-cover" />
                </div>

                <div className="min-w-0">
                  <p className="text-[14px] font-semibold text-[#1C1D21] truncate">{o.product}</p>
                  <p className="mt-1 text-[12px] text-[#A0A3BD] truncate">{o.address}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-[14px] font-semibold text-[#1C1D21]">{o.price}</p>
                <p className={orderStatus(o.status)}>{o.status}</p>
              </div>
            </div>
          ))}
        </div>

        {/* footer */}
        <div className="flex items-center gap-4 py-5">
          <button className="h-12 px-8 rounded-xl bg-[#5E81F4] text-white font-semibold text-[14px]">
            All Orders
          </button>
          <p className="text-[13px] text-[#6B6F91]">
            <span className="font-semibold">2.480</span> Total Orders
          </p>
        </div>
      </div>
    </div>
  );
}

function orderStatus(s: Order["status"]) {
  if (s === "Shipped") return "mt-1 text-[12px] font-semibold text-[#28C76F]";
  if (s === "Cancelled") return "mt-1 text-[12px] font-semibold text-[#FF4D4F]";
  return "mt-1 text-[12px] font-semibold text-[#FFB020]";
}