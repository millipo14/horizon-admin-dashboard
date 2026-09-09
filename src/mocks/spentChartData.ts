import type { SpentChartData } from "../types/mocksTypes";

export const spentChartMock: SpentChartData[] = [
    {
        month: 'SEP',
        currentSpent: 60,
        prevSpent: 40,
        monthData: {
            totalSpentAmount: '$24.8K',
            spentPercent: '+1.15%',
            onTrack: true
        }
    },
    {
        month: 'OCT',
        currentSpent: 50,
        prevSpent: 25,
        monthData: {
            totalSpentAmount: '$19.2K',
            spentPercent: '-0.85%',
            onTrack: true
        }
    },
    {
        month: 'NOV',
        currentSpent: 108,
        prevSpent: 55,
        monthData: {
            totalSpentAmount: '$37.5K',
            spentPercent: '+2.45%',
            onTrack: true
        }
    },
    {
        month: 'DEC',
        currentSpent: 35,
        prevSpent: 30,
        monthData: {
            totalSpentAmount: '$15.0K',
            spentPercent: '-4.20%',
            onTrack: true
        }
    },
    {
        month: 'JAN',
        currentSpent: 80,
        prevSpent: 48,
        monthData: {
            totalSpentAmount: '$29.4K',
            spentPercent: '+1.90%',
            onTrack: true
        }
    },
    {
        month: 'FEB',
        currentSpent: 75,
        prevSpent: 62,
        monthData: {
            totalSpentAmount: '$28.1K',
            spentPercent: '+0.30%',
            onTrack: true
        }
    }
];