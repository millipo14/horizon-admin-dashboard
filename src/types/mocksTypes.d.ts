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