import s from './ComlpexTable.module.scss'

import ApprovedIcon from '../../../assets/dashboard/complexTableIcons/approved.svg?react'
import DisableIcon from '../../../assets/dashboard/complexTableIcons/disable.svg?react'
import ErrorIcon from '../../../assets/dashboard/complexTableIcons/error.svg?react'

import LayoutTable from '../../UI/LayoutTable/LayoutTable'
import { complexTableMock } from '../../../mocks/complexTable'
import { Box, LinearProgress, TableCell, TableRow } from '@mui/material'
import { formatDateEU } from '../../../utils/formatDate'

export default function ComlpexTable() {
    const names = ['NAME', 'STATUS', 'DATE', 'PROGRESS']
    return (
        <LayoutTable
            title='Complex Table'
            tableCellNames={names}
        >
                {
                    complexTableMock.map(row => (
                        <TableRow key={row.id}>
                            <TableCell className={s.bodyCell}>
                                {row.name}
                            </TableCell>

                            <TableCell className={s.bodyCell}>
                                {
                                    row.status === 'approved'
                                        ? <div className={s.status}>
                                            <ApprovedIcon /> <span>{row.status}</span>
                                        </div>
                                        : row.status === 'disable'
                                            ? <div className={s.status}>
                                                <DisableIcon /> <span>{row.status}</span>
                                            </div>
                                            : <div className={s.status}>
                                                <ErrorIcon /> <span>{row.status}</span>
                                            </div>

                                }
                            </TableCell>

                            <TableCell className={s.bodyCell}>
                                {formatDateEU(row.date)}
                            </TableCell>

                            <TableCell className={s.bodyCell}>
                                <Box sx={{ width: '108px' }}>
                                    <LinearProgress
                                        variant='determinate'
                                        value={row.progress}
                                        className={s.progress}
                                    />
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))
                }
        </LayoutTable>
    )
}
