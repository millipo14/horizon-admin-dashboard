import s from './SelectMonth.module.scss'

import CalendarIcon from '../../../assets/dashboard/spentChartIcons/calendarIcon.svg?react'

import { FormControl, InputAdornment, MenuItem, Select, type SelectChangeEvent } from '@mui/material'

import type { SpentPeriod } from '../../../types/mocksTypes';

interface SelectMonthProps {
    period: SpentPeriod;
    onChange: (event: SelectChangeEvent<SpentPeriod>) => void;
}

export default function SelectMonth({ period, onChange }: SelectMonthProps) {
    return (
        <FormControl>
            <Select
                className={s.select}
                value={period}
                onChange={onChange}
                startAdornment={
                    <InputAdornment position='start'>
                        <CalendarIcon />
                    </InputAdornment>
                }
            >
                <MenuItem
                    className={s.select_item}
                    value="3-months">Last 3 months</MenuItem>
                <MenuItem
                    className={s.select_item}
                    value="6-months">Last 6 months</MenuItem>
                <MenuItem
                    className={s.select_item}
                    value="9-months">Last 9 months</MenuItem>
                <MenuItem
                    className={s.select_item}
                    value="12-months">Last 12 months</MenuItem>
            </Select>
        </FormControl>
    )
}
