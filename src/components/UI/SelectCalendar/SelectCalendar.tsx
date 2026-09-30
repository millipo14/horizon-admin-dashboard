import s from './SelectCalendar.module.scss'

import ArrowSelect from '../../../assets/dashboard/cardIcons/arrowSelect.svg?react'

import { FormControl, MenuItem, Select } from '@mui/material'

interface SelectCalendarProps {
    value: number;
    options: string[] | number[];
    onChange: (value: number) => void;
}

export default function SelectCalendar({ value, options, onChange }: SelectCalendarProps) {
    return (
        <FormControl>
            <Select
                className={s.select}
                value={value}
                IconComponent={ArrowSelect}
                onChange={(event) => {
                    onChange(event.target.value)
                }}
            >
                {
                    options.map((option, index) =>
                        <MenuItem
                            className={s.select_item}
                            value={index}
                            key={index}
                        >
                            {option}
                        </MenuItem>
                    )
                }
            </Select>
        </FormControl>
    )
}
