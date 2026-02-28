import { MoveUpRight } from "lucide-react";
import type { Overview } from "../../types/dashboard";
import { getStatData } from "../../data/statData";

interface StatCardsProps {
  overview: Overview;
}

const StatCards = ({ overview }: StatCardsProps) => {
  const statData = getStatData(overview);

  return (
    <>
      {statData.map((stat, i) => (
        <div
          key={i}
          className={`
    xl:col-span-3 rounded-3xl sm:rounded-4xl border p-5 sm:p-6
    flex flex-col justify-between min-h-35
    transition-all duration-300 hover:shadow-xl hover:-translate-y-1
    ${
      stat.accent
        ? "bg-linear-to-br from-[#2D6A4F] via-[#1B4332] to-[#081C15] text-white border-transparent"
        : "bg-white border-gray-200 text-gray-900"
    }
  `}
        >
          <div className="flex items-start justify-between">
            <p
              className={`text-base md:text-lg xl:text-xl font-bold ${
                stat.accent ? "text-white/90" : "text-black"
              }`}
            >
              {stat.title}
            </p>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-transform hover:rotate-45
      ${stat.accent ? "bg-white/10 backdrop-blur-md border-white/20" : "bg-gray-50 border-gray-100"}`}
            >
              <MoveUpRight
                className={stat.accent ? "text-white" : "text-[#1B4332]"}
                size={20}
              />
            </div>
          </div>

          <div>
            <p className="text-4xl sm:text-5xl font-bold mt-2 tracking-tight">
              {stat.value}
            </p>
            <p
              className={`text-[11px] font-medium mt-1 flex items-center gap-1 ${
                stat.accent ? "text-[#D8F3DC]" : "text-[#2D6A4F]"
              }`}
            >
              <span className="bg-white/20 px-1 rounded-sm text-[10px]">
                5+
              </span>
              {stat.subtitle}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default StatCards;
