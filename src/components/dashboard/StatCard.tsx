import { motion } from "framer-motion";
import { ArrowUp, ArrowDown, type LucideIcon } from "lucide-react";

type Tone = "danger" | "warning" | "info" | "success";

const toneMap: Record<Tone, { ring: string; icon: string; bg: string }> = {
  danger:  { ring: "ring-primary/30",  icon: "text-primary",  bg: "from-primary/20 to-primary/0" },
  warning: { ring: "ring-accent/30",   icon: "text-accent",   bg: "from-accent/20 to-accent/0" },
  info:    { ring: "ring-info/30",     icon: "text-info",     bg: "from-info/20 to-info/0" },
  success: { ring: "ring-success/30",  icon: "text-success",  bg: "from-success/20 to-success/0" },
};

interface StatCardProps {
  label: string;
  value: string;
  delta?: number;
  unit?: string;
  icon: LucideIcon;
  tone?: Tone;
}

export function StatCard({ label, value, delta, unit, icon: Icon, tone = "info" }: StatCardProps) {
  const t = toneMap[tone];
  const positive = (delta ?? 0) >= 0;
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="relative overflow-hidden rounded-2xl glass p-5 group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${t.bg} opacity-50 group-hover:opacity-100 transition-opacity`} />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground">{label}</p>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-3xl font-bold tracking-tight">{value}</span>
            {unit && <span className="text-xs text-muted-foreground">{unit}</span>}
          </div>
          {delta !== undefined && (
            <div className={`mt-2 inline-flex items-center gap-1 text-xs font-medium ${positive ? "text-success" : "text-primary"}`}>
              {positive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
              {Math.abs(delta)}% vs yesterday
            </div>
          )}
        </div>
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ${t.ring}`}>
          <Icon className={`h-5 w-5 ${t.icon}`} />
        </div>
      </div>
    </motion.div>
  );
}
