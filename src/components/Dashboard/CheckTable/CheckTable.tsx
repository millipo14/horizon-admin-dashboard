import s from './CheckTable.module.scss'

import MoreIcon from '../../../assets/dashboard/icons/more.svg?react'
import DashboardLayout from '../../UI/DashboardLayout/DashboardLayout'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { checkTablesMock } from '../../../mocks/checkTable'
import CustomCheckbox from '../../UI/Checkbox/Checkbox'


export default function CheckTable() {
    return (
        <DashboardLayout className={s.table}>
            <div className={s.header}>
                <h2 className={s.title}>
                    Check Table
                </h2>
                <button className={s.icon}>
                    <MoreIcon />
                </button>
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
                        {checkTablesMock.map((row) => {
                            const formattedDate = new Date(row.date).toLocaleDateString('en-US', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric',
                            })
                            return (
                                <TableRow key={row.id}>
                                    <TableCell className={s.bodyCell}>
                                        <CustomCheckbox />
                                        {row.name}
                                    </TableCell>

                                    <TableCell className={s.bodyCell}>
                                        {row.progress}%
                                    </TableCell>

                                    <TableCell className={s.bodyCell}>
                                        {row.quantity.toLocaleString('de-DE')}
                                    </TableCell>

                                    <TableCell className={s.bodyCell}>
                                        {formattedDate}
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
