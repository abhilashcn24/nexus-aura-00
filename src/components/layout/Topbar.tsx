import { Menu } from "lucide-react";

export function Topbar() {
  const triggerAccidentImagePreview = () => {
    window.dispatchEvent(new Event("accident-image-preview"));
  };

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/60 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-4 px-4 md:px-6">
        <button className="lg:hidden p-2 rounded-lg hover:bg-white/5">
          <Menu className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={triggerAccidentImagePreview}
          className="flex items-center gap-2 rounded-md px-2 py-1 outline-none transition hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Trigger latest accident image preview"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Live - <span className="text-success">All systems nominal</span>
          </span>
        </button>

        <div className="ml-auto" />
      </div>
    </header>
  );
}
