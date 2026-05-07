import { Hospital, Phone, CheckCircle2, Clock } from "lucide-react";

const hospitals = [
  { name: "Mount Sinai West", distance: "1.2 km", eta: "3 min", status: "confirmed", beds: 4 },
  { name: "NY Presbyterian", distance: "2.8 km", eta: "6 min", status: "confirmed", beds: 12 },
  { name: "Lenox Hill Hospital", distance: "3.4 km", eta: "8 min", status: "pending", beds: 7 },
  { name: "Bellevue Trauma", distance: "5.1 km", eta: "11 min", status: "standby", beds: 18 },
];

const statusMap: Record<string, { color: string; label: string }> = {
  confirmed: { color: "text-success bg-success/15", label: "CONFIRMED" },
  pending: { color: "text-warning bg-warning/15", label: "PENDING" },
  standby: { color: "text-info bg-info/15", label: "STANDBY" },
};

export function HospitalPanel() {
  return (
    <div className="rounded-2xl glass p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Hospital className="h-4 w-4 text-info" />
          <h3 className="text-sm font-semibold">Nearby Hospitals Notified</h3>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-info/15 text-info">4 CONTACTED</span>
      </div>
      <div className="space-y-2">
        {hospitals.map((h) => {
          const s = statusMap[h.status];
          return (
            <div key={h.name} className="flex items-center gap-3 rounded-xl bg-white/3 border border-white/5 p-3 hover:bg-white/5 transition group">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-info/10">
                {h.status === "confirmed" ? <CheckCircle2 className="h-4 w-4 text-success" /> : <Hospital className="h-4 w-4 text-info" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{h.name}</p>
                <p className="text-[11px] text-muted-foreground flex items-center gap-2 mt-0.5">
                  <span>{h.distance}</span>·<span className="flex items-center gap-1"><Clock className="h-2.5 w-2.5" />{h.eta}</span>·<span>{h.beds} beds</span>
                </p>
              </div>
              <span className={`text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded ${s.color}`}>
                {s.label}
              </span>
              <button className="opacity-0 group-hover:opacity-100 transition p-1.5 rounded-lg bg-white/5 hover:bg-white/10">
                <Phone className="h-3.5 w-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
