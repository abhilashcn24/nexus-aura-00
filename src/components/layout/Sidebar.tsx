import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Activity,
  Shield,
} from "lucide-react";

const items = [
  { to: "/", icon: Activity, label: "Dashboard" },
];

export function Sidebar() {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border bg-sidebar/50 backdrop-blur-xl">
      <div className="flex items-center gap-3 px-6 py-6 border-b border-border">
        <div className="relative">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent glow-red">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-success pulse-ring" />
        </div>
        <div>
          <p className="text-sm font-bold tracking-tight">CRASH GUARD</p>
          <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">Accident Response</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-1">
        {items.map((item) => {
          const active = path === item.to;
          return (
            <Link key={item.to} to={item.to} className="block">
              <motion.div
                whileHover={{ x: 4 }}
                className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary/15 text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-primary to-accent"
                  />
                )}
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
