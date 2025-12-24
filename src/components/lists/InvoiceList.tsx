type Invoice = {
  id: string;
  client: string;
  amount: string;
  status: "Paid" | "Pending" | "Processing";
};

const invoices: Invoice[] = [
  { id: "AA-04-19-1890678", client: "New Madieton LLC.", amount: "$118.00", status: "Paid" },
  { id: "AA-04-19-1897890", client: "Crystalton INC.", amount: "$118.00", status: "Pending" },
  { id: "AA-04-19-1890243", client: "Tyriquemouth LLC.", amount: "$578.00", status: "Paid" },
  { id: "AA-04-19-1893481", client: "Lethamouth LLC.", amount: "$374.00", status: "Paid" },
];

export default function InvoiceList() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold">Invoices</h2>
        <div className="flex items-center gap-2 text-sm">
          <button className="rounded-xl px-3 py-1.5 text-slate-500 hover:bg-slate-50">Day</button>
          <button className="rounded-xl px-3 py-1.5 text-slate-500 hover:bg-slate-50">Week</button>
          <button className="rounded-xl bg-slate-100 px-3 py-1.5">Month</button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 px-2 text-xs text-slate-500">
        <div className="col-span-8">Number</div>
        <div className="col-span-4 text-right">Details</div>
      </div>

      <div className="mt-2 divide-y">
        {invoices.map((inv) => (
          <div key={inv.id} className="grid grid-cols-12 items-center gap-2 py-3">
            <div className="col-span-8">
              <p className="text-sm font-semibold">Invoice #{inv.id}</p>
              <p className="text-xs text-slate-500">{inv.client}</p>
            </div>
            <div className="col-span-4 text-right">
              <p className="text-sm font-semibold">{inv.amount}</p>
              <span className={badge(inv.status)}>{inv.status}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
          All Invoices
        </button>
        <p className="text-sm text-slate-500">1,520 Total Invoices</p>
      </div>
    </div>
  );
}

function badge(status: Invoice["status"]) {
  const base = "inline-block mt-1 rounded-full px-2 py-0.5 text-xs font-semibold";
  if (status === "Paid") return `${base} bg-emerald-50 text-emerald-700`;
  if (status === "Pending") return `${base} bg-amber-50 text-amber-700`;
  return `${base} bg-slate-100 text-slate-700`;
}
