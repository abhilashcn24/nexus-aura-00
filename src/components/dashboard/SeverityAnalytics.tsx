import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts";

const data = [
  { d: "Mon", critical: 4, high: 7, total: 18 },
  { d: "Tue", critical: 2, high: 9, total: 22 },
  { d: "Wed", critical: 6, high: 11, total: 28 },
  { d: "Thu", critical: 3, high: 8, total: 19 },
  { d: "Fri", critical: 8, high: 14, total: 34 },
  { d: "Sat", critical: 5, high: 12, total: 26 },
  { d: "Sun", critical: 7, high: 10, total: 24 },
];

export function SeverityAnalytics() {
  return (
    <div className="rounded-2xl glass p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold">Severity Analytics</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Last 7 days · by severity</p>
        </div>
        <div className="flex gap-2 text-[10px] font-mono">
          <span className="flex items-center gap-1.5 text-primary"><span className="h-2 w-2 rounded-sm bg-primary" />Critical</span>
          <span className="flex items-center gap-1.5 text-accent"><span className="h-2 w-2 rounded-sm bg-accent" />High</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barCategoryGap={12}>
          <Tooltip
            cursor={{ fill: "oklch(1 0 0 / 4%)" }}
            contentStyle={{ background: "oklch(0.21 0.028 265)", border: "1px solid oklch(1 0 0 / 10%)", borderRadius: 8, fontSize: 11 }}
          />
          <XAxis dataKey="d" tick={{ fill: "oklch(0.72 0.02 260)", fontSize: 10 }} axisLine={false} tickLine={false} />
          <Bar dataKey="critical" stackId="a" fill="oklch(0.68 0.24 27)" radius={[0, 0, 4, 4]} />
          <Bar dataKey="high" stackId="a" fill="oklch(0.72 0.2 50)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 grid grid-cols-3 gap-3 pt-4 border-t border-border">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Avg/day</p>
          <p className="text-lg font-bold mt-0.5">24.4</p>
        </div>
        <div>
          <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Peak hour</p>
          <p className="text-lg font-bold mt-0.5">17:00</p>
        </div>
        <div>
          <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Trend</p>
          <p className="text-lg font-bold mt-0.5 text-primary">+12%</p>
        </div>
      </div>
    </div>
  );
}
