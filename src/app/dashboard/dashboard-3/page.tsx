import DashboardShell from "@/components/layout/DashboardShell";
import WelcomePanel from "@/components/layout/WelcomePanel";
import KpiRow from "@/components/cards/KpiRow";
import OrdersChartCard from "@/components/charts/OrdersChartCard";
import PlannedIncomeCard from "@/components/charts/PlannedIncomeCard";
import LatestSalesTable from "@/components/tables/LatestSalesTable";

export default function Dashboard3() {
  return (
    <DashboardShell left={<WelcomePanel mode="dashboard-3" userName="CRAFTUI" />}>
      <KpiRow
        items={[
          { type: "kpi", title: "Sales", subtitle: "Week comparison", value: "1.345", tone: "green", trend: "up" },
          { type: "kpi", title: "Leads", subtitle: "Month comparison", value: "3.820", tone: "blue", trend: "down" },
          { type: "kpi", title: "Income", subtitle: "Week comparison", value: "$690.00", tone: "red", trend: "up" },
        ]}
      />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <OrdersChartCard />
        </div>
        <PlannedIncomeCard />
      </div>

      <div className="mt-6">
        <LatestSalesTable />
      </div>
    </DashboardShell>
  );
}
