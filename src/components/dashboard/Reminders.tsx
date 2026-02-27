
import { Video } from "lucide-react";

const Reminders = () => {
    return (
        <div className="xl:col-span-3 bg-white rounded-[24px] sm:rounded-[32px] border border-gray-200 p-5 sm:p-6 min-h-[220px] flex flex-col justify-between">
            <div>
                <h3 className="text-base font-semibold text-gray-800 mb-4">
                    Reminders
                </h3>
                <p className="text-lg font-bold text-gray-900 leading-snug">
                    Meeting with Arc Company
                </p>
                <p className="text-sm text-gray-500 mt-1.5">
                    Time : 02.00 pm - 04.00 pm
                </p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-[#1B4332] hover:bg-[#2E7D32] text-white px-4 py-3 rounded-full text-sm font-semibold mt-4 transition-colors w-full cursor-pointer">
                <Video size={16} /> Start Meeting
            </button>
        </div>
    );
};

export default Reminders;
