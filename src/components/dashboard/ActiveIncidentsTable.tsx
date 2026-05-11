import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ImageIcon, Maximize2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Incident {
  id: string;
  vehicle: string;
  location: string;
  severity: "Critical" | "High" | "Moderate" | "Low";
  time: string;
  status: "Dispatched" | "En Route" | "On Scene" | "Resolved";
  responseTime: string;
  liveImageUrl?: string;
}

const data: Incident[] = [
  {
    id: "INC-2841",
    vehicle: "Tesla Model Y - NYC-7821",
    location: "Hwy A-12 - KM 47.3",
    severity: "Critical",
    time: "2 min ago",
    status: "Dispatched",
    responseTime: "--",
    liveImageUrl:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "INC-2840",
    vehicle: "BMW iX - NYC-3492",
    location: "5th Ave & 42nd",
    severity: "High",
    time: "8 min ago",
    status: "En Route",
    responseTime: "4:12",
    liveImageUrl:
      "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "INC-2839",
    vehicle: "Ford F-150 - NJ-1145",
    location: "Lincoln Tunnel S.",
    severity: "Moderate",
    time: "14 min ago",
    status: "On Scene",
    responseTime: "3:48",
    liveImageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "INC-2838",
    vehicle: "Honda Civic - NYC-9201",
    location: "Brooklyn Bridge",
    severity: "High",
    time: "22 min ago",
    status: "On Scene",
    responseTime: "5:02",
    liveImageUrl:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "INC-2837",
    vehicle: "Audi e-tron - CT-3387",
    location: "I-95 N - Exit 14",
    severity: "Low",
    time: "38 min ago",
    status: "Resolved",
    responseTime: "6:21",
    liveImageUrl:
      "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1200&q=80",
  },
];

const sevStyle: Record<Incident["severity"], string> = {
  Critical: "bg-primary/15 text-primary border-primary/30",
  High: "bg-accent/15 text-accent border-accent/30",
  Moderate: "bg-warning/15 text-warning border-warning/30",
  Low: "bg-info/15 text-info border-info/30",
};

const statusStyle: Record<Incident["status"], string> = {
  Dispatched: "text-primary",
  "En Route": "text-accent",
  "On Scene": "text-warning",
  Resolved: "text-success",
};

export function ActiveIncidentsTable() {
  const latestIncidentWithImage = data.find((incident) => incident.liveImageUrl);
  const [autoPreviewIncident, setAutoPreviewIncident] = useState<Incident | null>(null);

  useEffect(() => {
    const openLatestIncidentImage = () => {
      if (!latestIncidentWithImage) return;
      setAutoPreviewIncident(latestIncidentWithImage);
    };

    window.addEventListener("accident-image-preview", openLatestIncidentImage);

    return () => {
      window.removeEventListener("accident-image-preview", openLatestIncidentImage);
    };
  }, [latestIncidentWithImage]);

  return (
    <>
      <Dialog open={!!autoPreviewIncident} onOpenChange={(open) => !open && setAutoPreviewIncident(null)}>
        <DialogContent className="max-w-4xl border-border bg-background/95 p-0">
          {autoPreviewIncident && (
            <>
              <DialogHeader className="px-5 pt-5">
                <DialogTitle className="text-base">New accident detected</DialogTitle>
                <DialogDescription>
                  {autoPreviewIncident.id} - {autoPreviewIncident.vehicle} - {autoPreviewIncident.location}
                </DialogDescription>
              </DialogHeader>
              <div className="px-5 pb-5">
                <img
                  src={autoPreviewIncident.liveImageUrl}
                  alt={`Live accident capture for ${autoPreviewIncident.id}`}
                  className="max-h-[70vh] w-full rounded-md border border-border object-contain"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <div className="rounded-2xl glass overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div>
            <h3 className="text-sm font-semibold">Active Incidents</h3>
            <p className="text-xs text-muted-foreground mt-0.5">Real-time emergency response queue</p>
          </div>
        </div>
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                <th className="text-left px-5 py-3 font-medium">ID</th>
                <th className="text-left px-5 py-3 font-medium">Vehicle</th>
                <th className="text-left px-5 py-3 font-medium">Location</th>
                <th className="text-left px-5 py-3 font-medium">Live Image</th>
                <th className="text-left px-5 py-3 font-medium">Severity</th>
                <th className="text-left px-5 py-3 font-medium">Status</th>
                <th className="text-left px-5 py-3 font-medium">Response</th>
                <th className="text-left px-5 py-3 font-medium">Time</th>
                <th className="px-5 py-3 w-8"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-t border-border hover:bg-white/3 transition-colors group cursor-pointer"
                >
                  <td className="px-5 py-3.5 font-mono text-xs text-muted-foreground">{row.id}</td>
                  <td className="px-5 py-3.5 font-medium">{row.vehicle}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{row.location}</td>
                  <td className="px-5 py-3.5">
                    {row.liveImageUrl ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            type="button"
                            className="group/image relative flex h-14 w-24 overflow-hidden rounded-md border border-border bg-muted text-left outline-none transition hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-ring"
                            aria-label={`Open live accident image for ${row.id}`}
                          >
                            <img
                              src={row.liveImageUrl}
                              alt={`Live accident capture for ${row.id}`}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                            <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover/image:bg-black/35">
                              <Maximize2 className="h-4 w-4 text-white opacity-0 transition group-hover/image:opacity-100" />
                            </span>
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl border-border bg-background/95 p-0">
                          <DialogHeader className="px-5 pt-5">
                            <DialogTitle className="text-base">Live accident image</DialogTitle>
                            <DialogDescription>
                              {row.id} - {row.vehicle} - {row.location}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="px-5 pb-5">
                            <img
                              src={row.liveImageUrl}
                              alt={`Expanded live accident capture for ${row.id}`}
                              className="max-h-[70vh] w-full rounded-md border border-border object-contain"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <div className="flex h-14 w-24 items-center justify-center rounded-md border border-dashed border-border bg-muted text-muted-foreground">
                        <ImageIcon className="h-4 w-4" />
                      </div>
                    )}
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold border ${sevStyle[row.severity]}`}>
                      {row.severity}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${statusStyle[row.status]}`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {row.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 font-mono text-xs">{row.responseTime}</td>
                  <td className="px-5 py-3.5 text-xs text-muted-foreground">{row.time}</td>
                  <td className="px-5 py-3.5 text-muted-foreground group-hover:text-foreground">
                    <ChevronRight className="h-4 w-4" />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
