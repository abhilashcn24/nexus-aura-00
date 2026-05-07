import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, LineChart } from "recharts";

const accel = Array.from({ length: 30 }, (_, i) => ({
  t: i,
  x: Math.sin(i / 3) * 0.6 + Math.random() * 0.4,
  y: Math.cos(i / 4) * 0.4 + Math.random() * 0.3,
  z: 1 + Math.sin(i / 5) * 0.2,
}));

const speed = Array.from({ length: 30 }, (_, i) => ({
  t: i,
  v: i < 22 ? 55 + Math.sin(i / 2) * 8 : Math.max(0, 60 - (i - 22) * 12),
}));

export function SensorChart() {
  return (
    <div className="rounded-2xl glass p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold">Sensor Telemetry</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Last 30 seconds · pre-impact</p>
        </div>
        <div className="flex gap-2 text-[10px] font-mono">
          <span className="flex items-center gap-1.5 text-primary"><span className="h-2 w-2 rounded-full bg-primary" />X</span>
          <span className="flex items-center gap-1.5 text-accent"><span className="h-2 w-2 rounded-full bg-accent" />Y</span>
          <span className="flex items-center gap-1.5 text-info"><span className="h-2 w-2 rounded-full bg-info" />Z</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">Accelerometer (g)</p>
          <ResponsiveContainer width="100%" height={120}>
            <AreaChart data={accel}>
              <defs>
                <linearGradient id="ax" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.68 0.24 27)" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="oklch(0.68 0.24 27)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip
                contentStyle={{ background: "oklch(0.21 0.028 265)", border: "1px solid oklch(1 0 0 / 10%)", borderRadius: 8, fontSize: 11 }}
                labelStyle={{ color: "oklch(0.72 0.02 260)" }}
              />
              <XAxis dataKey="t" hide />
              <YAxis hide />
              <Area type="monotone" dataKey="x" stroke="oklch(0.68 0.24 27)" fill="url(#ax)" strokeWidth={2} />
              <Area type="monotone" dataKey="y" stroke="oklch(0.72 0.2 50)" fill="transparent" strokeWidth={1.5} />
              <Area type="monotone" dataKey="z" stroke="oklch(0.68 0.18 250)" fill="transparent" strokeWidth={1.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div>
          <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">Speed (mph)</p>
          <ResponsiveContainer width="100%" height={90}>
            <LineChart data={speed}>
              <Tooltip
                contentStyle={{ background: "oklch(0.21 0.028 265)", border: "1px solid oklch(1 0 0 / 10%)", borderRadius: 8, fontSize: 11 }}
              />
              <XAxis dataKey="t" hide />
              <YAxis hide />
              <Line type="monotone" dataKey="v" stroke="oklch(0.72 0.2 50)" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
