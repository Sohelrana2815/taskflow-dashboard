import type { Overview } from "../../types/dashboard";

interface StatCardsProps {
    overview: Overview;
}

const StatCards = ({ overview }: StatCardsProps) => {
    const statData = [
        {
            title: "Total Users",
            value: overview.totalUsers.toLocaleString(),
            subtitle: "General metric",
            accent: true,
        },
        {
            title: "Active Users",
            value: overview.activeUsers.toLocaleString(),
            subtitle: "Currently online",
            accent: false,
        },
        {
            title: "Revenue",
            value: `$${overview.revenue.toLocaleString()}`,
            subtitle: "Total earnings",
            accent: false,
        },
        {
            title: "Growth",
            value: `${overview.growth}%`,
            subtitle: "Month over month",
            accent: false,
        },
    ];

    return (
        <>
            {statData.map((stat, i) => (
                <div
                    key={i}
                    className={`
            xl:col-span-3 rounded-[24px] sm:rounded-[32px] border p-5 sm:p-6
            flex flex-col justify-between min-h-[140px]
            transition-shadow hover:shadow-md
            ${stat.accent
                            ? "bg-[#1B4332] text-white border-[#1B4332]"
                            : "bg-white border-gray-200 text-gray-900"
                        }
          `}
                >
                    <div className="flex items-start justify-between">
                        <p
                            className={`text-sm font-medium ${stat.accent ? "text-white/80" : "text-gray-500"
                                }`}
                        >
                            {stat.title}
                        </p>
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center
              ${stat.accent ? "bg-white/20" : "bg-gray-100"}`}
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke={stat.accent ? "white" : "#6B7280"}
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
                        <p className="text-3xl sm:text-4xl font-bold mt-2">{stat.value}</p>
                        <p
                            className={`text-xs mt-1 ${stat.accent ? "text-green-300" : "text-green-600"
                                }`}
                        >
                            <span className="mr-1">↑</span>
                            {stat.subtitle}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default StatCards;
