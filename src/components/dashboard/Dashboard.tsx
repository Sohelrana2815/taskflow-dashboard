import { useState } from "react";
import { Plus, Upload, Loader2, AlertCircle } from "lucide-react";

import Header from "../layout/Header";
import SideNav from "../layout/SideNav";

// Extracted Components
import StatCards from "./StatCards";
import ProjectAnalytics from "./ProjectAnalytics";
import Reminders from "./Reminders";
import ProjectList from "./ProjectList";
import TeamCollaboration from "./TeamCollaboration";
import ProjectProgress from "./ProjectProgress";
import TimeTracker from "./TimeTracker";

// API Hook
import { useDashboardData } from "../../hooks/useDashboardData";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data, isLoading, error } = useDashboardData();

  return (
    <div className="flex h-screen bg-[#F8F9FA] overflow-hidden">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SideNav — fixed on desktop, slide-over on mobile */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-white border-r border-gray-200 p-5
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:block
          h-full overflow-y-auto
        `}
      >
        <SideNav onClose={() => setSidebarOpen(false)} />
      </aside>

      {/* Main content area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <div className="px-4 sm:px-6 pt-2 sm:pt-4">
          <Header
            onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
            isSidebarOpen={sidebarOpen}
          />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto dashboard-scroll px-4 sm:px-6 pb-6">
          {/* Dashboard title + action buttons */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-6 mb-8 gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Dashboard
              </h1>
              <p className="text-sm font-medium text-gray-500 mt-2">
                Plan, prioritize, and accomplish your tasks with ease.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center justify-center gap-2 bg-[#1B4332] hover:bg-[#2E7D32] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer hover:shadow-md">
                <Plus size={18} strokeWidth={2.5} />
                Add Project
              </button>
              <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer hover:shadow-sm">
                <Upload size={16} strokeWidth={2.5} />
                Import Data
              </button>
            </div>
          </div>

          {/* Dashboard grid — STRICT 3 ROW responsive layout */}
          {isLoading ? (
            <div className="flex-1 flex flex-col items-center justify-center min-h-[400px]">
              <Loader2 className="h-10 w-10 text-[#1B4332] animate-spin mb-4" />
              <p className="text-gray-500 font-medium tracking-wide animate-pulse">
                Loading dashboard data...
              </p>
            </div>
          ) : error ? (
            <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] text-red-500">
              <AlertCircle className="h-12 w-12 mb-3 opacity-80" />
              <p className="font-semibold text-lg">Error loading data</p>
              <p className="text-sm opacity-80">{error}</p>
            </div>
          ) : data ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5 sm:gap-6 lg:gap-7 auto-rows-auto">
              {/* ROW 1 */}
              <StatCards overview={data.overview} />

              {/* ROW 2 */}
              <ProjectAnalytics analytics={data.analytics} />
              <Reminders />

              {/* ROW 2 & ROW 3 SPANNING */}
              <ProjectList products={data.products} />

              {/* ROW 3 */}
              <TeamCollaboration users={data.users} />
              <ProjectProgress />
              <TimeTracker />
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
