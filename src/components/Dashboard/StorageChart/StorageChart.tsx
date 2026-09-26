import { useState } from 'react'
import SelectStorage from '../../UI/SelectStorage/SelectStorage'
import s from './StorageChart.module.scss'
import type { StoragePeriod } from '../../../types/mocksTypes'
import { storageMock } from '../../../mocks/storageMock'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import DashboardLayout from '../../UI/DashboardLayout/DashboardLayout'

const COLORS = ['#4318FF', '#6AD2FF', '#E4E8EF']

export default function StorageChart() {
    const [period, setPeriod] = useState<StoragePeriod>('monthly')
    const currentData = storageMock[period]


    return (
        <DashboardLayout>
            <header className={s.header}>
                <h3 className={s.title}>
                    Your Pie Chart
                </h3>
                <SelectStorage period={period} onChange={(e) => setPeriod(e.target.value)} />
            </header>
            <ResponsiveContainer width='100%' height={260}>
                <PieChart>
                    <Pie
                        data={currentData}
                        dataKey='value'
                        nameKey='name'
                    >
                        {
                            currentData.map((item, index) => (
                                <Cell
                                    key={item.id}
                                    fill={COLORS[index]}
                                />
                            )
                            )
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className={s.legend}>
                {currentData.map((item, index) => (
                    <div className={s.legendItem} key={item.id}>
                        <div className={s.info}>
                            <span
                                className={s.legendColor}
                                style={{ backgroundColor: COLORS[index] }}
                            />
                            <span>{item.name}</span>
                        </div>
                        <span>{item.value}%</span>
                    </div>
                ))}
            </div>
        </DashboardLayout>
    )
}
