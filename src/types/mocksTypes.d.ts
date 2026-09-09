export interface SpentChartData {
    month: string,
    currentSpent: number,
    prevSpent: number,
    monthData: {
        totalSpentAmount: string,
        spentPercent: string,
        onTrack: boolean
    }
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