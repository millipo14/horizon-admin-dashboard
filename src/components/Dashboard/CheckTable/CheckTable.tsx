import s from './CheckTable.module.scss'

import MoreIcon from '../../../assets/dashboard/icons/more.svg?react'
import DashboardLayout from '../../UI/DashboardLayout/DashboardLayout'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { checkTablesMock } from '../../../mocks/checkTable'
import CustomCheckbox from '../../UI/Checkbox/Checkbox'
import { useState } from 'react'
import type { TableDataType } from '../../../types/mocksTypes'
import { formatedDate } from '../../../utils/formatDate'


export default function CheckTable() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedId, setSelectedId] = useState<number[]>([])
    const [viewTable, setViewTable] = useState<TableDataType[]>(checkTablesMock)

    return (
        <DashboardLayout className={s.table}>
            <div className={s.header}>
                <h2 className={s.title}>
                    Check Table
                </h2>
                <div className={s.actions}>
                    <button className={s.icon}
                        onClick={() => setIsOpen(!isOpen)}>
                        <MoreIcon />
                    </button>

                    {isOpen && (
                        <div className={s.dropdown}>
                            <button className={s.btnDelet}
                                onClick={() => setViewTable(viewTable.filter((item) => !selectedId.includes(item.id)))}>
                                Delete selected
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <TableContainer component={Paper} className={s.tableContainer}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={s.headCell}>NAME</TableCell>
                            <TableCell className={s.headCell}>PROGRESS</TableCell>
                            <TableCell className={s.headCell}>QUANTITY</TableCell>
                            <TableCell className={s.headCell}>DATE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
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
                    </TableBody>
                </Table>
            </TableContainer>
        </DashboardLayout>
    )
}
