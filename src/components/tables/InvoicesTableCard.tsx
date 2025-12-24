"use client";
import Image from "next/image";
import SectionHeader from "../common/SectionHeader";
import { useState } from "react";
import { INVOICES_DATA } from "@/data/data";
import { Invoice } from "@/types/type";

export default function InvoicesTableCard() {
    const [tab, setTab] = useState("day");
    return (
        <div className="rounded-2xl bg-white shadow-sm overflow-hidden">
            <div className="px-6 py-5">
                <SectionHeader title="Invoices" activeKey={tab}
                    onChange={setTab} />
            </div>

            <div className="grid grid-cols-[1fr_140px] gap-4 bg-[#F6F7FB] px-6 py-4 text-[12px] font-semibold text-[#6B6F91]">
                <p>Number</p>
                <p className="text-right">Details</p>
            </div>

            <div className="px-6">
                <div className="divide-y divide-slate-100">
                    {INVOICES_DATA.map((inv) => (
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
                </div>

                <div className="flex items-center gap-4 py-5">
                    <button className="h-12 px-8 rounded-xl bg-[#5E81F4] text-white font-semibold text-[14px]">
                        All Invoices
                    </button>
                    <p className="text-[13px] text-[#6B6F91]">
                        <span className="font-semibold">1.520</span> Total Invoices
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