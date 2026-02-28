import { Video } from "lucide-react";

const Reminders = () => {
  return (
    <div className="xl:col-span-3 bg-white rounded-3xl sm:rounded-4xl border border-gray-200 p-5 sm:p-6 min-h-55 flex flex-col justify-between">
      <div>
        <h3 className="text-base md:text-lg xl:text-xl font-semibold text-gray-800 mb-4 ">
          Reminders
        </h3>
        <p className="text-sm md:text-base xl:text-xl font-bold  leading-snug text-[#1B4332]">
          Meeting with Arc<span className="block">Company</span>
        </p>
        <p className="text-sm md:text-base text-gray-500 mt-1.5">
          Time : 02.00 pm - 04.00 pm
        </p>
      </div>
      <button className="flex items-center justify-center gap-2 bg-[#1B4332] hover:bg-[#2E7D32] text-white px-3 py-2 xl:py-3 rounded-full text-sm font-semibold mt-4 transition-colors w-full cursor-pointer md:text-base">
        <Video fill="white" size={20} /> Start Meeting
      </button>
    </div>
  );
};

export default Reminders;
