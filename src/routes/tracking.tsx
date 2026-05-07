import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { LiveMap } from "@/components/dashboard/LiveMap";
import { SensorChart } from "@/components/dashboard/SensorChart";
import { ResponseTimeline } from "@/components/dashboard/ResponseTimeline";

export const Route = createFileRoute("/tracking")({
  head: () => ({ meta: [{ title: "Live Tracking — SENTINEL" }] }),
  component: () => (
    <DashboardLayout>
      <div>
        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">Real-time</p>
        <h1 className="mt-1 text-3xl font-bold">Live GPS Tracking</h1>
      </div>
      <LiveMap />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SensorChart />
        <ResponseTimeline />
      </div>
    </DashboardLayout>
  ),
});
