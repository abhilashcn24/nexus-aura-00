import { motion } from "framer-motion";
import { MapPin, Maximize2, Layers } from "lucide-react";

const incidents = [
  { id: 1, x: 28, y: 35, severity: "critical" },
  { id: 2, x: 62, y: 48, severity: "high" },
  { id: 3, x: 45, y: 70, severity: "moderate" },
  { id: 4, x: 78, y: 25, severity: "high" },
  { id: 5, x: 18, y: 62, severity: "low" },
];

const sevColor: Record<string, string> = {
  critical: "bg-primary",
  high: "bg-accent",
  moderate: "bg-warning",
  low: "bg-info",
};

export function LiveMap() {
  return (
    <div className="relative overflow-hidden rounded-2xl glass h-[460px]">
      <div className="absolute inset-0 opacity-40" style={{
        background: `
          linear-gradient(to right, oklch(1 0 0 / 4%) 1px, transparent 1px),
          linear-gradient(to bottom, oklch(1 0 0 / 4%) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }} />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(circle at 30% 40%, oklch(0.68 0.24 27 / 15%), transparent 50%), radial-gradient(circle at 70% 60%, oklch(0.68 0.18 250 / 12%), transparent 50%)"
      }} />

      {/* Roads */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,40 Q30,30 50,45 T100,50" stroke="oklch(1 0 0 / 10%)" strokeWidth="0.4" fill="none" />
        <path d="M20,0 Q25,40 35,60 T50,100" stroke="oklch(1 0 0 / 10%)" strokeWidth="0.4" fill="none" />
        <path d="M0,75 Q40,70 70,80 T100,72" stroke="oklch(1 0 0 / 10%)" strokeWidth="0.4" fill="none" />
        <path d="M65,0 Q70,30 80,55 T90,100" stroke="oklch(1 0 0 / 10%)" strokeWidth="0.4" fill="none" />
      </svg>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold">Live Incident Map</h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-success/15 text-success">LIVE</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Metro Region · 5 active incidents</p>
        </div>
        <div className="flex gap-1">
          <button className="p-1.5 rounded-md glass hover:bg-white/10"><Layers className="h-3.5 w-3.5" /></button>
          <button className="p-1.5 rounded-md glass hover:bg-white/10"><Maximize2 className="h-3.5 w-3.5" /></button>
        </div>
      </div>

      {/* Incident pins */}
      {incidents.map((i, idx) => (
        <motion.div
          key={i.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: idx * 0.15 }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${i.x}%`, top: `${i.y}%` }}
        >
          <div className="relative">
            <span className={`absolute inset-0 rounded-full ${sevColor[i.severity]} opacity-30 animate-ping`} style={{ width: 32, height: 32, marginLeft: -10, marginTop: -10 }} />
            <div className={`relative h-3 w-3 rounded-full ${sevColor[i.severity]} ring-2 ring-background`} />
          </div>
        </motion.div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
          {Object.entries(sevColor).map(([k, c]) => (
            <span key={k} className="inline-flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${c}`} />{k}
            </span>
          ))}
        </div>
        <div className="text-[10px] font-mono text-muted-foreground">
          LAT 40.7128 · LNG -74.0060
        </div>
      </div>

      {/* Scan effect */}
      <div className="absolute inset-0 scan-line pointer-events-none opacity-30" />
    </div>
  );
}
