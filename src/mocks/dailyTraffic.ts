import type { DailyTrafficType } from "../types/mocksTypes";

export const dailyTrafficMock: DailyTrafficType = {
    id: 1,
    percentageChange: 2.45,
    onChange: true,
    visitors: 2579,
    chartData: [
        { time: '00', value: 320 },
        { time: '04', value: 210 },
        { time: '08', value: 540 },
        { time: '12', value: 290 },
        { time: '14', value: 410 },
        { time: '16', value: 620 },
        { time: '18', value: 180 },
    ],
}