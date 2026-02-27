export interface Overview {
    totalUsers: number;
    activeUsers: number;
    revenue: number;
    growth: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
    status: "active" | "inactive";
    joinDate: string;
}

export interface AnalyticsData {
    date: string;
    views: number;
    clicks: number;
    conversions: number;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    sales: number;
    category: string;
}

export interface DashboardData {
    overview: Overview;
    users: User[];
    analytics: AnalyticsData[];
    products: Product[];
}
