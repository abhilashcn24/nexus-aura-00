import { Menu } from "lucide-react";

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

        <div className="ml-auto" />
      </div>
    </header>
  );
}
