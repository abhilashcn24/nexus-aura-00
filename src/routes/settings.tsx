import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — SENTINEL" }] }),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <DashboardLayout>
      <div>
        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">Configuration</p>
        <h1 className="mt-1 text-3xl font-bold">Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {[
          { title: "Alert Thresholds", desc: "Configure when an impact triggers an emergency dispatch." },
          { title: "Notification Channels", desc: "SMS, Push, Email & WebSocket integrations." },
          { title: "Hospital Network", desc: "Manage partnered hospitals and dispatch priority." },
          { title: "Sensor Calibration", desc: "Tune accelerometer and gyroscope sensitivity." },
        ].map((s) => (
          <div key={s.title} className="rounded-2xl glass p-5">
            <h3 className="text-sm font-semibold">{s.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
            <div className="mt-4 space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between rounded-lg bg-white/3 border border-white/5 px-3 py-2.5">
                  <span className="text-xs">Option {i}</span>
                  <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-primary/30">
                    <span className="absolute right-0.5 h-4 w-4 rounded-full bg-primary glow-red" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
