export interface FinancialData {
    date: string;
    revenue: number;
    netIncome: number;
    grossProfit: number;
    eps: number;
    operatingIncome: number;
}

export interface FilterCriteria {
    dateRange: [string, string];
    revenueRange: [number, number];
    netIncomeRange: [number, number];
}