import type { Overview } from "../types/dashboard";

export const getStatData = (overview: Overview) => [
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
