import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { HospitalPanel } from "@/components/dashboard/HospitalPanel";

export const Route = createFileRoute("/hospitals")({
  head: () => ({ meta: [{ title: "Hospitals — SENTINEL" }] }),
  component: () => (
    <DashboardLayout>
      <div>
        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">Network</p>
        <h1 className="mt-1 text-3xl font-bold">Hospital Coordination</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <HospitalPanel />
        <HospitalPanel />
      </div>
    </DashboardLayout>
  ),
});
