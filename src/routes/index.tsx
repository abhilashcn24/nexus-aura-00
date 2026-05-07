import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, Siren, TrendingUp, Activity } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { ActiveIncidentsTable } from "@/components/dashboard/ActiveIncidentsTable";
import { SeverityGauge } from "@/components/dashboard/SeverityGauge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Overview — Crash Guard" },
      { name: "description", content: "Real-time accident monitoring overview." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <DashboardLayout>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
            Crash Guard · Live Overview
          </p>
          <h1 className="mt-1 text-3xl md:text-4xl font-bold tracking-tight">
            Dashboard <span className="text-gradient-emergency">Overview</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Real-time accident monitoring and response status.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard label="Accidents Today" value="47" delta={12} icon={AlertTriangle} tone="info" />
        <StatCard label="High Severity" value="9" delta={3} icon={Siren} tone="danger" />
        <StatCard label="System Uptime" value="99.9" unit="%" delta={0} icon={TrendingUp} tone="success" />
        <StatCard label="Active Incidents" value="5" delta={1} icon={Activity} tone="warning" />
      </div>

      <div className="grid grid-cols-1 gap-4">
        <SeverityGauge value={84} />
      </div>

      <ActiveIncidentsTable />

      <footer className="pt-6 pb-2 text-center text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
        Crash Guard · Accident Monitoring Dashboard · v2.4.1
      </footer>
    </DashboardLayout>
  );
}
