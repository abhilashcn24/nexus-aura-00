import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { SeverityAnalytics } from "@/components/dashboard/SeverityAnalytics";
import { SeverityGauge } from "@/components/dashboard/SeverityGauge";
import { SensorChart } from "@/components/dashboard/SensorChart";

export const Route = createFileRoute("/analytics")({
  head: () => ({ meta: [{ title: "Analytics — SENTINEL" }] }),
  component: () => (
    <DashboardLayout>
      <div>
        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">Insights</p>
        <h1 className="mt-1 text-3xl font-bold">Analytics</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SeverityAnalytics />
        <SeverityGauge value={62} />
      </div>
      <SensorChart />
    </DashboardLayout>
  ),
});
