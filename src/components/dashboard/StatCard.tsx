interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  accent?: boolean;
  className?: string; 
}

const StatCard = ({
  title,
  value,
  subtitle,
  accent,
  className,
}: StatCardProps) => {
  return (
    <div
      className={`
      rounded-2xl sm:rounded-3xl border p-5 sm:p-6
      flex flex-col justify-between min-h-35
      transition-shadow hover:shadow-md
      ${accent ? "bg-[#1B4332] text-white border-[#1B4332]" : "bg-white border-gray-200 text-gray-900"}
      ${className}
    `}
    >
      <div className="flex items-start justify-between">
        <p
          className={`text-sm font-medium ${accent ? "text-white/80" : "text-gray-500"}`}
        >
          {title}
        </p>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${accent ? "bg-white/20" : "bg-gray-100"}`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={accent ? "white" : "#6B7280"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>
      <div>
        <p className="text-3xl sm:text-4xl font-bold mt-2">{value}</p>
        <p
          className={`text-xs mt-1 ${accent ? "text-green-300" : "text-green-600"}`}
        >
          ↗ {subtitle}
        </p>
      </div>
    </div>
  );
};

export default StatCard;
