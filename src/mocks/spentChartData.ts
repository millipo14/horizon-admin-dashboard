import type { SpentPeriodData, SpentChartData, SpentPeriod } from '../types/mocksTypes';

const fullYearData: SpentChartData[] = [
    { month: 'MAR', currentSpent: 30, prevSpent: 28 },
    { month: 'APR', currentSpent: 45, prevSpent: 38 },
    { month: 'MAY', currentSpent: 65, prevSpent: 45 },
    { month: 'JUN', currentSpent: 40, prevSpent: 35 },
    { month: 'JUL', currentSpent: 55, prevSpent: 42 },
    { month: 'AUG', currentSpent: 70, prevSpent: 50 },
    { month: 'SEP', currentSpent: 60, prevSpent: 40 },
    { month: 'OCT', currentSpent: 50, prevSpent: 25 },
    { month: 'NOV', currentSpent: 108, prevSpent: 55 },
    { month: 'DEC', currentSpent: 35, prevSpent: 30 },
    { month: 'JAN', currentSpent: 80, prevSpent: 48 },
    { month: 'FEB', currentSpent: 75, prevSpent: 62 },
];

export const spentChartMock: Record<SpentPeriod, SpentPeriodData> = {
    '3-months': {
        summary: {
            totalSpentAmount: '$72.5K',
            spentPercent: '+1.20%',
            onTrack: true,
        },
        chartData: fullYearData.slice(-3),
    },

    '6-months': {
        summary: {
            totalSpentAmount: '$154.0K',
            spentPercent: '+2.45%',
            onTrack: true,
        },
        chartData: fullYearData.slice(-6),
    },

    '9-months': {
        summary: {
            totalSpentAmount: '$215.5K',
            spentPercent: '+0.95%',
            onTrack: false,
        },
        chartData: fullYearData.slice(-9),
    },

    '12-months': {
        summary: {
            totalSpentAmount: '$266.1K',
            spentPercent: '+3.10%',
            onTrack: true,
        },
        chartData: fullYearData,
    },
};