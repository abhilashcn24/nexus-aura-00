import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { LiveAlertToast } from "../dashboard/LiveAlertToast";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1 p-4 md:p-6 space-y-6 overflow-x-hidden">
          {children}
        </main>
      </div>
      <LiveAlertToast />
    </div>
  );
}
