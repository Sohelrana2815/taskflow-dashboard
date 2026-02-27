import { useState, useEffect } from "react";
import { fetchDashboardData } from "../services/dashboardService";
import type { DashboardData } from "../types/dashboard";

export const useDashboardData = () => {
    const [data, setData] = useState<DashboardData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const loadData = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const result = await fetchDashboardData();
                if (isMounted) {
                    setData(result);
                }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (err: any) {
                if (isMounted) {
                    setError(err.message || "Failed to load dashboard data.");
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        loadData();

        return () => {
            isMounted = false;
        };
    }, []);

    return { data, isLoading, error };
};
