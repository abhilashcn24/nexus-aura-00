import { motion, AnimatePresence } from "framer-motion";
import { Siren, X, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export function LiveAlertToast() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 2500);
    const t2 = setTimeout(() => setShow(false), 12000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)]"
        >
          <div className="relative overflow-hidden rounded-2xl glass glow-red border border-primary/40">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-accent" />
            <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-radial)" }} />
            <div className="relative p-4 flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 pulse-ring">
                <Siren className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-primary">
                    ⚠ Critical impact detected
                  </p>
                  <button onClick={() => setShow(false)} className="text-muted-foreground hover:text-foreground">
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
                <p className="mt-1 text-sm font-semibold leading-snug">
                  Vehicle #VH-2841 — High-impact collision
                </p>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  Highway A-12 · KM 47.3
                </p>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 h-8 rounded-md bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90">
                    Dispatch
                  </button>
                  <button className="flex-1 h-8 rounded-md bg-white/5 border border-white/10 text-xs font-medium hover:bg-white/10">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
