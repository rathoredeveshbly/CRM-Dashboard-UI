import ActivityList from "@/components/lists/ActivityList";

export default function WelcomePanel({
  userName = "CRAFTUI",
  mode,
}: {
  userName?: string;
  mode: "dashboard-2" | "dashboard-3";
}) {
  return (
    <div className="flex h-full flex-col pt-2">
      {/* Big C card */}
      <div className="h-24 w-24 rounded-[28px] bg-[#5E81F4] grid place-items-center">
        <span className="text-white text-[56px] font-semibold leading-none">C</span>
      </div>

      {/* Welcome text */}
      <div className="mt-6">
        <p className="text-[16px] text-slate-500 font-normal">Welcome,</p>
        <p className="mt-1 text-[24px] font-semibold tracking-tight text-[#1C1D21]">
          {userName}
        </p>
      </div>

      <div className="mt-10 min-h-0 flex-1">
        <ActivityList mode={mode} />
      </div>
    </div>
  );
}