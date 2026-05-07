import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, Siren, Stethoscope, Timer, Hospital, TrendingUp } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { LiveMap } from "@/components/dashboard/LiveMap";
import { ActiveIncidentsTable } from "@/components/dashboard/ActiveIncidentsTable";
import { SeverityGauge } from "@/components/dashboard/SeverityGauge";
import { SensorChart } from "@/components/dashboard/SensorChart";
import { ResponseTimeline } from "@/components/dashboard/ResponseTimeline";
import { AIInsights } from "@/components/dashboard/AIInsights";
import { HospitalPanel } from "@/components/dashboard/HospitalPanel";
import { SeverityAnalytics } from "@/components/dashboard/SeverityAnalytics";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Command Center — SENTINEL IoT" },
      { name: "description", content: "Real-time accident monitoring overview." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <DashboardLayout>
      {/* Page header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
            Command Center · 14:38 EST
          </p>
          <h1 className="mt-1 text-3xl md:text-4xl font-bold tracking-tight">
            Emergency <span className="text-gradient-emergency">Operations</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Live accident monitoring across all connected vehicles and IoT sensors.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 h-10 rounded-lg bg-white/5 border border-white/10 text-xs font-medium hover:bg-white/10">
            Export report
          </button>
          <button className="px-4 h-10 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-semibold glow-red hover:opacity-90">
            New dispatch
          </button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard label="Accidents Today" value="47" delta={12} icon={AlertTriangle} tone="info" />
        <StatCard label="High Severity" value="9" delta={3} icon={Siren} tone="danger" />
        <StatCard label="Ambulances" value="14" unit="active" delta={-5} icon={Stethoscope} tone="warning" />
        <StatCard label="Avg Response" value="4:21" delta={-8} icon={Timer} tone="success" />
        <StatCard label="Hospitals Notified" value="22" delta={4} icon={Hospital} tone="info" />
        <StatCard label="System Uptime" value="99.9" unit="%" delta={0} icon={TrendingUp} tone="success" />
      </div>

      {/* Map + gauge */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2"><LiveMap /></div>
        <SeverityGauge value={84} />
      </div>

      {/* Table */}
      <ActiveIncidentsTable />

      {/* Telemetry row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <SensorChart />
        <ResponseTimeline />
        <AIInsights />
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <HospitalPanel />
        <SeverityAnalytics />
      </div>

      <footer className="pt-6 pb-2 text-center text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
        SENTINEL · IoT Emergency Response Network · v2.4.1
      </footer>
    </DashboardLayout>
  );
}
