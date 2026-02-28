const ProjectProgress = () => {
  return (
    <div className="xl:col-span-4 xl:row-span-2 bg-white rounded-3xl sm:rounded-4xl border border-gray-200 p-5 sm:p-6 flex flex-col items-center">
      <h3 className="text-base md:text-lg xl:text-xl font-semibold text-gray-800 w-full mb-4">
        Project Progress
      </h3>

      {/* Donut chart placeholder */}
      <div className="relative w-40 h-40 my-4">
        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
          {/* Background circle */}
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="5" // Thicker stroke
          />
          {/* Completed: 41% */}
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="#1B4332"
            strokeWidth="5"
            strokeDasharray="41 59"
            strokeDashoffset="0"
            strokeLinecap="round"
          />
          {/* In Progress: 30% */}
        
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-[#1B4332]">41%</span>
          <span className="text-[11px] font-medium text-gray-500 mt-1">
            Project Ended
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between w-full mt-6 px-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#1B4332]" />
          <span className="text-[11px] font-medium text-gray-500">
            Completed
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
          <span className="text-[11px] font-medium text-gray-500">
            In Progress
          </span>
        </div>
        <div className="flex items-center gap-2">
          {/* Cross hatch pattern approximation */}
          <div className="w-3 h-3 rounded-full bg-gray-100 overflow-hidden relative">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_1px,#9ca3af_1px,#9ca3af_2px)]"></div>
          </div>
          <span className="text-[11px] font-medium text-gray-500">Pending</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;
