import { Pause, Square } from "lucide-react";

const TimeTracker = () => {
  return (
   <div
      className="xl:col-span-3 bg-[#1B4332] rounded-3xl sm:rounded-4xl p-5 sm:p-6 text-white
          flex flex-col justify-between overflow-hidden relative"
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-80"
        style={{ 
          backgroundImage: `url('/ads.webp')`, 
        }}
      />

      {/* Content Container - Ensure z-10 for visibility */}
      <h3 className="text-base font-semibold md:text-lg xl:text-xl text-white/90 relative z-10 w-full mb-4">
        Time Tracker
      </h3>

      <div className="text-center my-6 relative z-10">
        <p className="text-4xl font-bold tracking-wider font-mono drop-shadow-md">
          01:24:08
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 relative z-10 mt-2">
        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer text-[#1B4332] shadow-lg">
          <Pause size={20} fill="currentColor" />
        </button>

        <button className="w-12 h-12 bg-[#D93F3F] rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer text-white shadow-lg">
          <Square size={20} fill="currentColor" />
        </button>
      </div>
    </div>
  );
};

export default TimeTracker;
