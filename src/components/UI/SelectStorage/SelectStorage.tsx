import type { StoragePeriod } from '../../../types/mocksTypes'
import s from './SelectStorage.module.scss'

import { FormControl, MenuItem, Select, type SelectChangeEvent } from '@mui/material'

interface SelectStorageProps {
  period: StoragePeriod;
  onChange: (event: SelectChangeEvent<StoragePeriod>) => void
}

export default function SelectStorage({ period, onChange }: SelectStorageProps) {
  return (
    <FormControl>
      <Select
        className={s.select}
        value={period}
        onChange={onChange}
      >
        <MenuItem
          className={s.select_item}
          value="monthly">Monthly
        </MenuItem>
        <MenuItem
          className={s.select_item}
          value="weekly">Weekly
        </MenuItem>
        <MenuItem
          className={s.select_item}
          value="yearly">Yearly
        </MenuItem>
      </Select>
    </FormControl>
  )
}
