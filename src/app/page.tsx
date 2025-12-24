import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-6 text-[#1C1D21]">
          Dashboard Launcher
        </h1>

        <div className="flex gap-4 justify-center">
          <Link
            href="/dashboard/dashboard-2"
            className="px-6 py-3 rounded-xl bg-[#5E81F4] text-white font-semibold hover:opacity-90 transition"
          >
            Open Dashboard 2
          </Link>

          <Link
            href="/dashboard/dashboard-3"
            className="px-6 py-3 rounded-xl bg-[#6BCB77] text-white font-semibold hover:opacity-90 transition"
          >
            Open Dashboard 3
          </Link>
        </div>
      </div>
    </div>
  );
}
