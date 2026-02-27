
import { Pause, Square } from "lucide-react";

const TimeTracker = () => {
    return (
        <div className="xl:col-span-3  bg-[#1B4332] rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 text-white
         flex flex-col justify-between overflow-hidden relative">
            {/* Background decorative waves representation */}
            <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                {/* Simple visual representation of waves using CSS gradients for pure tailwind approach */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full border border-white/20 blur-sm scale-150"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-white/20 blur-sm scale-110"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-white/20 blur-[2px] scale-90"></div>
            </div>

            <h3 className="text-base font-semibold text-white/90 relative z-10 w-full mb-4">
                Time Tracker
            </h3>

            <div className="text-center my-6 relative z-10">
                <p className="text-4xl font-bold tracking-wider font-mono">
                    01:24:08
                </p>
            </div>

            <div className="flex items-center justify-center gap-4 relative z-10 mt-2">
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer text-[#1B4332]">
                    <Pause size={18} fill="currentColor" />
                </button>

                <button className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer text-white">
                    <Square size={16} fill="currentColor" />
                </button>
            </div>
        </div>
    );
};

export default TimeTracker;
