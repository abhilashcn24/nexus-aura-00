import { motion } from "framer-motion";
import { Siren, MapPin, Hospital, Stethoscope, CheckCircle2 } from "lucide-react";

const events = [
  { time: "14:32:08", title: "Impact detected", desc: "Accelerometer threshold exceeded · 8.4g", icon: Siren, tone: "danger" },
  { time: "14:32:11", title: "GPS locked", desc: "Hwy A-12, KM 47.3 · ±3m accuracy", icon: MapPin, tone: "info" },
  { time: "14:32:14", title: "Hospitals notified", desc: "Mt. Sinai, NY Presbyterian, Lenox Hill", icon: Hospital, tone: "warning" },
  { time: "14:32:22", title: "Ambulance dispatched", desc: "Unit AMB-204 · ETA 4 min", icon: Stethoscope, tone: "warning" },
  { time: "14:36:41", title: "On scene", desc: "Paramedics secured perimeter", icon: CheckCircle2, tone: "success" },
];

const tones: Record<string, string> = {
  danger: "bg-primary/20 text-primary ring-primary/40",
  info: "bg-info/20 text-info ring-info/40",
  warning: "bg-accent/20 text-accent ring-accent/40",
  success: "bg-success/20 text-success ring-success/40",
};

export function ResponseTimeline() {
  return (
    <div className="rounded-2xl glass p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-semibold">Emergency Response Timeline</h3>
          <p className="text-xs text-muted-foreground mt-0.5">INC-2841 · Tesla Model Y</p>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-success/15 text-success">RESOLVED · 4:33</span>
      </div>

      <div className="relative space-y-4">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-success opacity-40" />
        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative flex gap-4"
          >
            <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ${tones[e.tone]}`}>
              <e.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0 pt-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-sm font-medium">{e.title}</p>
                <span className="text-[10px] font-mono text-muted-foreground shrink-0">{e.time}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">{e.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
