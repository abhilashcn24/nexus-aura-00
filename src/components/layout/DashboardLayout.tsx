import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import BorderGlow from "@/components/ui/BorderGlow";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
          <BorderGlow
            className="h-full"
            edgeSensitivity={8}
            glowColor="205 95 72"
            backgroundColor="#0b1020"
            borderRadius={20}
            glowRadius={34}
            glowIntensity={1.1}
            coneSpread={18}
            animated={false}
            colors={["#38bdf8", "#60a5fa", "#0ea5e9"]}
            fillOpacity={0.4}
          >
            <div className="p-4 md:p-6 space-y-6">{children}</div>
          </BorderGlow>
        </main>
      </div>
    </div>
  );
}
