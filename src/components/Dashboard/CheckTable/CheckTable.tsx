import s from './CheckTable.module.scss'


import { TableCell, TableRow } from '@mui/material'
import { checkTablesMock } from '../../../mocks/checkTable'
import CustomCheckbox from '../../UI/Checkbox/Checkbox'
import { useState } from 'react'
import type { TableDataType } from '../../../types/mocksTypes'
import { formatedDate } from '../../../utils/formatDate'
import LayoutTable from '../../UI/LayoutTable/LayoutTable'


export default function CheckTable() {
    const [selectedId, setSelectedId] = useState<number[]>([])
    const [viewTable, setViewTable] = useState<TableDataType[]>(checkTablesMock)

    const names = ['NAME', 'PROGRESS', 'QUANTITY', 'DATE']

    return (
        <LayoutTable
            title='Check Table'
            onClickMore={() => setViewTable(viewTable.filter((item) => !selectedId.includes(item.id)))}
            buttonMoreText='Delete selected'
            tableCellNames={names}
        >
            {viewTable.slice(0, 5).map((row) => {
                const checked = selectedId.includes(row.id)
                return (
                    <TableRow key={row.id}>
                        <TableCell className={s.bodyCell}>
                            <CustomCheckbox checked={checked} onChange={(check) => check ? setSelectedId([...selectedId, row.id]) : setSelectedId(selectedId.filter(id => id !== row.id))} />
                            {row.name}
                        </TableCell>

                        <TableCell className={s.bodyCell}>
                            {row.progress}%
                        </TableCell>

                        <TableCell className={s.bodyCell}>
                            {row.quantity.toLocaleString('de-DE')}
                        </TableCell>

                        <TableCell className={s.bodyCell}>
                            {formatedDate(row.date)}
                        </TableCell>
                    </TableRow>
                )
            })}
        </LayoutTable>
    )
}
