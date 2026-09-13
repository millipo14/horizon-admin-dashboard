import s from './SpentChart.module.scss';
import cn from 'classnames';

import ArrowIcon from '../../../assets/dashboard/spentChartIcons/arrow.svg?react'
import CheckIcon from '../../../assets/dashboard/spentChartIcons/checkIcon.svg?react'
import ChartToggle from '../../../assets/dashboard/spentChartIcons/chartToggle.svg?react'

import { useState } from 'react';
import { spentChartMock } from "../../../mocks/spentChartData";

import SpentChartGraph from './SpentChartGraph';
import DashboardLayout from '../../UI/DashboardLayout/DashboardLayout';
import SelectMonth from '../../UI/SelectMonth/SelectMonth';

import type { SpentPeriod } from '../../../types/mocksTypes';


export default function SpentChart() {
    const [period, setPeriod] = useState<SpentPeriod>('6-months')
    const [lineGraph, setLineGraph] = useState(true)
    const currentData = spentChartMock[period]

    return (
        <DashboardLayout className={s.spentCard}>
            <button
                className={s.chart_btn}
                type="button"
                aria-label="Toggle chart"
                onClick={() => setLineGraph(prev => !prev)}
            >
                <ChartToggle />
            </button>

            <div className="info">
                <SelectMonth period={period} onChange={(e) => setPeriod(e.target.value as SpentPeriod)} />
                <p className={s.amount}>{currentData.summary.totalSpentAmount}</p>
                <p className={s.total_spent}>
                    Total Spent
                    <span className={cn(s.percent, !currentData.summary.onTrack && s.percent__false)}>
                        <ArrowIcon className={cn(s.percent__icon, !currentData.summary.onTrack && s['percent__icon-false'])} /> {currentData.summary.spentPercent}
                    </span>
                </p>
                <div className={s.check}>
                    {
                        currentData.summary.onTrack ?
                            <div className={s.check__true}>
                                <CheckIcon />
                                On track
                            </div>
                            :
                            <div className={s.check__false}>
                                Not track!
                            </div>
                    }
                </div>

            </div>
            <div className="graph">
                <SpentChartGraph lineGraph={lineGraph} data={currentData.chartData} />
            </div>
        </DashboardLayout>
    );
}