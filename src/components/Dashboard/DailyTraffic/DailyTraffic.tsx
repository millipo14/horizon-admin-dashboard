import s from './DailyTraffic.module.scss'

import ArrowIcon from '../../../assets/dashboard/spentChartIcons/arrow.svg?react'

import cn from 'classnames';

import DashboardLayout from "../../UI/DashboardLayout/DashboardLayout";
import { dailyTrafficMock } from '../../../mocks/dailyTraffic';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import DailyTrafficTooltip from './DailyTrafficTooltip';

export default function DailyTraffic() {
    return (
        <DashboardLayout>
            <div className={s.header}>
                <h3 className={s.title}>Daily Traffic</h3>
                <span className={cn(s.percent, !dailyTrafficMock.onChange && s.percent__false)}>
                    <ArrowIcon className={cn(s.percent__icon, !dailyTrafficMock.onChange && s['percent__icon-false'])} />
                    {dailyTrafficMock.onChange ? '+' : '-'} {dailyTrafficMock.percentageChange}%
                </span>
            </div>
            <div className={s.visitors}>
                {dailyTrafficMock.visitors.toLocaleString('de-DE')} <span>Visitors</span>
            </div>
            <div className={s.graph}>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={dailyTrafficMock.chartData}
                        barSize={15}
                    >
                        <XAxis dataKey='time'
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#a3aed0', fontSize: 12, fontWeight: 500 }}
                            tickMargin={16}
                        />
                        <YAxis hide />
                        <Tooltip
                            cursor={false}
                            content={<DailyTrafficTooltip />}
                        />
                        <defs>
                            <linearGradient
                                id="dailyTrafficGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop offset="0%" stopColor="#4318ff" />
                                <stop offset="100%" stopColor="rgba(67, 24, 255, 0.28)" />
                            </linearGradient>
                        </defs>
                        <Bar
                            dataKey="value"
                            fill="url(#dailyTrafficGradient)"
                            radius={[60, 60, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </DashboardLayout>
    )
}
