"use client";

import React, { useState } from "react";
import Topbar from "@/components/layout/Topbar";

export default function DashboardShell({
  left,
  children,
}: {
  left: React.ReactNode;
  children: React.ReactNode;
}) {
  const [isLeftOpen, setIsLeftOpen] = useState(true);

  return (
    <div
      className={`min-w-0 min-h-screen grid grid-cols-1 ${isLeftOpen ? "lg:grid-cols-[360px_minmax(0,1fr)]" : ""}`}>
      {/* Welcome panel */}
      {isLeftOpen && (
        <aside className="min-w-0 bg-[#F6F7FB] lg:border-r lg:border-[#E6E8F0] flex">
          <div className="bg-white px-5 py-6 sm:px-6 lg:px-8 lg:py-6 flex flex-col w-full">
            {left}
          </div>
        </aside>
      )}

      {/* Main content */}
      <section className="min-w-0 px-4 pt-4 sm:px-6">
        <Topbar onMenuClick={() => setIsLeftOpen((t) => !t)} />
        <div className="mt-2 min-w-0">{children}</div>
      </section>
    </div>
  );
}
