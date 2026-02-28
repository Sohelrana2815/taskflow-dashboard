import type { AnalyticsData } from "../../types/dashboard";

interface ProjectAnalyticsProps {
  analytics: AnalyticsData[];
}

const ProjectAnalytics = ({ analytics }: ProjectAnalyticsProps) => {
  // Use dates explicitly but trim to letters or use standard format. We'll map to indices if < 7 lengths.
  // We'll calculate height dynamically relative to a max view count of 2000 for visuals (or max available)
  const maxViews = Math.max(...analytics.map((a) => a.views), 2000);
  const getSimulatedHeight = (views: number) => {
    // Base height is ~100px mapped. So (views / max) * 100
    return Math.round((views / maxViews) * 100);
  };

  return (
    <div className="xl:col-span-6 bg-white rounded-3xl sm:rounded-4xl border border-gray-200 p-5 sm:p-6 min-h-55">
      <h3 className="text-base  md:text-lg xl:text-xl font-bold text-gray-800 mb-4">
        Project Analytics
      </h3>
      {/* Chart placeholder — weekly bar chart */}
      <div className="flex items-end justify-between gap-2 h-32 mt-4">
        {analytics.slice(0, 7).map((data, i) => {
          // Provide a letter representing day locally, or rely on date conversion. Let's use simple indexing.
          const dayLetter = ["M", "T", "W", "T", "F"][i % 5] || "S";
          const currentHeight = getSimulatedHeight(data.views);

          return (
            <div key={i} className="flex flex-col items-center gap-2 flex-1">
              <div className="w-full flex flex-col gap-1 relative">
                {/* Simulated tool tip on highest bar dynamically */}
                {data.views === Math.max(...analytics.map(a => a.views)) && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-100 text-[10px] font-semibold text-gray-700 px-2 py-1 rounded-md mb-1 z-10 whitespace-nowrap shadow-sm border border-gray-200">
                    {data.views}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-100 border-b border-r border-gray-200 transform rotate-45"></div>
                  </div>
                )}
                {/* Dynamically adjust stripes for lower ones */}
                <div
                  className={`w-full rounded-t-full rounded-b-md ${currentHeight > 50
                    ? "bg-[#1B4332]"
                    : "bg-gray-100/50 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#d1d5db_2px,#d1d5db_4px)]"
                    }`}
                  style={{ height: `${Math.max(currentHeight, 20)}px` }} // Min height 20px
                />
              </div>
              <span className="text-xs text-gray-400 font-medium">{dayLetter}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectAnalytics;
