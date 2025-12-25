import DashboardShell from "@/components/layout/DashboardShell";
import WelcomePanel from "@/components/layout/WelcomePanel";
import KpiRow from "@/components/cards/KpiRow";
import OrdersTableCard from "@/components/tables/OrdersTableCard";
import InvoicesTableCard from "@/components/tables/InvoicesTableCard";

export default function Dashboard2() {
  return (
    <DashboardShell left={<WelcomePanel mode="dashboard-2" userName="CRAFTUI" />}>
      <KpiRow items={[
        {
          type: "statSpark",
          value: "$1.870",
          label: "Income per lead",
          dot: "blue",
        },
        {
          type: "statSpark",
          value: "2.890",
          label: "New leads",
          dot: "grey",
        },
        {
          type: "statSpark",
          value: "15.10%",
          label: "Conversion rate",
          dot: "red",
        },
      ]}
      />
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <OrdersTableCard />
        <InvoicesTableCard />
      </div>
    </DashboardShell>
  );
}
