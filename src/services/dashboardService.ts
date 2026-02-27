import api from "../lib/axios";
import type { DashboardData } from "../types/dashboard";

export const fetchDashboardData = async (): Promise<DashboardData> => {
    const response = await api.get<DashboardData>("/dashboard");
    return response.data;
};
