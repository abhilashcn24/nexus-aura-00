import { motion } from "framer-motion";

interface SeverityGaugeProps {
  value: number; // 0-100
}

export function SeverityGauge({ value }: SeverityGaugeProps) {
  const radius = 80;
  const circumference = Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  const label = value > 80 ? "CRITICAL" : value > 60 ? "HIGH" : value > 35 ? "MODERATE" : "LOW";
  const color = value > 80 ? "oklch(0.68 0.24 27)" : value > 60 ? "oklch(0.72 0.2 50)" : value > 35 ? "oklch(0.78 0.18 75)" : "oklch(0.68 0.18 250)";

  return (
    <div className="rounded-2xl glass p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold">Accident Intensity</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Composite severity index</p>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-muted-foreground">REAL-TIME</span>
      </div>

      <div className="relative flex justify-center">
        <svg viewBox="0 0 200 110" className="w-full max-w-[280px]">
          <defs>
            <linearGradient id="gauge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.68 0.18 250)" />
              <stop offset="50%" stopColor="oklch(0.78 0.18 75)" />
              <stop offset="100%" stopColor="oklch(0.68 0.24 27)" />
            </linearGradient>
          </defs>
          <path
            d={`M 20 100 A ${radius} ${radius} 0 0 1 180 100`}
            stroke="oklch(1 0 0 / 8%)"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />
          <motion.path
            d={`M 20 100 A ${radius} ${radius} 0 0 1 180 100`}
            stroke="url(#gauge-grad)"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            style={{ filter: `drop-shadow(0 0 8px ${color})` }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight"
            style={{ color }}
          >
            {value}
          </motion.span>
          <span className="text-[10px] font-mono tracking-[0.2em] mt-1" style={{ color }}>
            {label}
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {[
          { l: "Impact G", v: "8.4" },
          { l: "Speed", v: "67mph" },
          { l: "Tilt", v: "42°" },
        ].map((s) => (
          <div key={s.l} className="rounded-lg bg-white/3 border border-white/5 py-2">
            <p className="text-[9px] font-mono uppercase text-muted-foreground tracking-wider">{s.l}</p>
            <p className="text-sm font-semibold mt-0.5">{s.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
