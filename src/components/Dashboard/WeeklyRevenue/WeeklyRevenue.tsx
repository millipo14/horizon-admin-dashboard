import s from './WeeklyRevenue.module.scss'

import ChartToggle from '../../../assets/dashboard/spentChartIcons/chartToggle.svg?react'

import { useState } from "react"

import { weeklyOrdersMock, weeklyRevenueMock } from "../../../mocks/weeklyMock"
import DashboardLayout from '../../UI/DashboardLayout/DashboardLayout'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import WeeklyTooltip from './WeeklyTooltip'

export default function WeeklyRevenue() {
    const [metric, setMetric] = useState<'revenue' | 'orders'>('revenue')
    const currentData = metric === 'revenue' ? weeklyRevenueMock : weeklyOrdersMock

    return (
        <DashboardLayout className={s.weeklyCard}>
            <div className={s.headerCard}>
                <h2 className={s.title}>Weekly Revenue</h2>
                <button
                    className={s.weekly_btn}
                    type="button"
                    onClick={() => setMetric((prev) => (prev === 'revenue' ? 'orders' : 'revenue'))}
                >
                    <ChartToggle />
                </button>
            </div>

            <div className='graph'>
                <ResponsiveContainer width="100%" height={260}>
                    <BarChart data={currentData} barSize={20}>
                        <XAxis dataKey='day'
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#a3aed0', fontSize: 12, fontWeight: 500 }}
                        />
                        <YAxis hide />
                        <Tooltip
                            cursor={false}
                            content={<WeeklyTooltip metric={metric} />}
                        />
                        <Bar dataKey="online" name="Online" stackId="a" fill="#6C5DD3" />
                        <Bar dataKey="retail" name="Retail" stackId="a" fill="#68D3FF" />
                        <Bar dataKey="partners" name="Partners" stackId="a" fill="#E4E8EF" radius={[60, 60, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </DashboardLayout>
    )
}
 