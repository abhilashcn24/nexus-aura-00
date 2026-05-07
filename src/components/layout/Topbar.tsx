import { Bell, Search, Wifi, Menu } from "lucide-react";
import { motion } from "framer-motion";

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/60 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-4 px-4 md:px-6">
        <button className="lg:hidden p-2 rounded-lg hover:bg-white/5">
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Live · <span className="text-success">All systems nominal</span>
          </span>
        </div>

        <div className="flex-1 max-w-md mx-auto hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search incidents, vehicles, sensors…"
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-white/5 border border-white/10 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-white/10 transition"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-muted-foreground">
              ⌘K
            </kbd>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg glass">
            <Wifi className="h-3.5 w-3.5 text-success" />
            <span className="text-[10px] font-mono">247 SENSORS</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-lg hover:bg-white/5"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold">
              3
            </span>
          </motion.button>

          <div className="flex items-center gap-3 pl-3 border-l border-border">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-medium leading-tight">Cmdr. Ava Reyes</p>
              <p className="text-[10px] text-muted-foreground">Dispatch Lead</p>
            </div>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold">
              AR
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
