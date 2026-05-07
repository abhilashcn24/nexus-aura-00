import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const insights = [
  { tag: "PATTERN", text: "Highway A-12 shows a 34% spike in evening incidents — recommend deploying patrol unit to KM 45–50." },
  { tag: "RISK", text: "Wet road conditions detected across 4 active zones. Severity probability +18%." },
  { tag: "DISPATCH", text: "Mt. Sinai capacity at 87%. Reroute next 2 critical cases to NY Presbyterian." },
];

export function AIInsights() {
  return (
    <div className="rounded-2xl glass p-5 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-30" style={{ background: "var(--gradient-emergency)" }} />
      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">AI Incident Insights</h3>
            <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Sentinel · Neural Engine</p>
          </div>
        </div>
        <div className="space-y-2.5">
          {insights.map((i, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="rounded-xl bg-white/3 border border-white/5 p-3 hover:bg-white/5 transition-colors"
            >
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-accent">{i.tag}</span>
              <p className="text-xs text-foreground/90 leading-relaxed mt-1">{i.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
