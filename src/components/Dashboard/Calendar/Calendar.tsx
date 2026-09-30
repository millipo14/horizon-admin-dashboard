import s from './Calendar.module.scss'

import { useState } from 'react';
import { DayPicker, type DateRange } from 'react-day-picker';
import 'react-day-picker/style.css';

import DashboardLayout from '../../UI/DashboardLayout/DashboardLayout';
import SelectCalendar from '../../UI/SelectCalendar/SelectCalendar';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const years = Array.from(
    { length: 11 },
    (_, index) => 2024 + index
)

export default function Calendar() {
    const [range, setRange] = useState<DateRange | undefined>()
    const [month, setMonth] = useState(new Date())

    const changeMonth = (monthIndex: number) => {
        const newMonth = new Date(month)
        newMonth.setMonth(monthIndex)
        setMonth(newMonth)
    }

    const changeYear = (yearIndex: number) => {
        const newYear = new Date(month)
        newYear.setFullYear(years[yearIndex])
        setMonth(newYear)
    }

    return (
        <DashboardLayout className={s.calendar}>
            <div className={s.header}>
                <div>
                    <SelectCalendar
                        value={month.getMonth()}
                        options={months}
                        onChange={changeMonth}
                    />
                </div>

                <div>
                    <SelectCalendar
                        value={years.indexOf(month.getFullYear())}
                        options={years}
                        onChange={changeYear}
                    />
                </div>



            </div>
            <DayPicker
                mode='range'
                selected={range}
                onSelect={setRange}

                month={month}
                onMonthChange={setMonth}

                showOutsideDays
                weekStartsOn={1}
                hideNavigation
            />
        </DashboardLayout>
    )
}
