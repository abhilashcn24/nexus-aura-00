import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ActiveIncidentsTable } from "@/components/dashboard/ActiveIncidentsTable";
import { AIInsights } from "@/components/dashboard/AIInsights";

export const Route = createFileRoute("/alerts")({
  head: () => ({ meta: [{ title: "Active Alerts — SENTINEL" }] }),
  component: () => (
    <DashboardLayout>
      <div>
        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">Live queue</p>
        <h1 className="mt-1 text-3xl font-bold">Active <span className="text-gradient-emergency">Alerts</span></h1>
      </div>
      <ActiveIncidentsTable />
      <AIInsights />
    </DashboardLayout>
  ),
});
