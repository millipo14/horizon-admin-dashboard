//Spent Chart Mocks
export type SpentPeriod = '3-months' | '6-months' | '9-months' | '12-months';

export interface SpentSelectData { //информация о расходах за выбранный период
    totalSpentAmount: string;
    spentPercent: string;
    onTrack: boolean;
}

export interface SpentChartData { //точка на графике
    month: string;
    currentSpent: number;
    prevSpent: number;
}

export interface SpentPeriodData {
    summary: SpentSelectData;
    chartData: SpentChartData[];
}

// Dashboard Cards Mocks
export interface DashboardCards {
    id: number
    type: 'earnings' | 'spend' | 'sales' | 'balance' | 'tasks' | 'projects'
    title: string
    value: number | string
    icon?: string
    change?: {
        percent: string
        text: string
    }
    additionalElement?: 'dropdown' | null
}

//Weekly Mocks
export type WeeklyPeriod = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'

export interface WeeklyDataType { //выручка/кол-во заказов ежедневно за неделю
    day: WeeklyPeriod;
    online: number;
    retail: number;
    partners: number;
}

//Check Tables Mocks

export interface TableDataType {
    id: number;
    name: string;
    progress: number;
    quantity: number;
    date: string;
}

// Daily Traffic Mocks

export interface DailyTrafficType {
    id: number;
    percentageChange: number;
    onChange: boolean;
    visitors: number;
    chartData: {
        time: string;
        value: number;
    }[];
}


// Pie Chart

export type StoragePeriod = 'weekly' | 'monthly' | 'yearly';

export interface StorageDataType {
    id: number;
    name: string;
    value: number;
}


