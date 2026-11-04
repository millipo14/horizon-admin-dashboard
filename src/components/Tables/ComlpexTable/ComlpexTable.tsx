import s from './ComlpexTable.module.scss'

import ApprovedIcon from '../../../assets/dashboard/complexTableIcons/approved.svg?react'
import DisableIcon from '../../../assets/dashboard/complexTableIcons/disable.svg?react'
import ErrorIcon from '../../../assets/dashboard/complexTableIcons/error.svg?react'

import LayoutTable from '../../UI/LayoutTable/LayoutTable'

import { TableCell, TableRow } from '@mui/material'
import { formatDateEU } from '../../../utils/formatDate'
import { useState, type ComponentType } from 'react'
import { complexTableMock } from '../../../mocks/tables/complexTable'

import type { TablesProps } from '../../../types/props'
import type { ComplexTableDataType } from '../../../types/mockTablesTypes'
import ProgressBar from '../../UI/ProgressBar/ProgressBar'

const statusConfig: Record<string, ComponentType> = {
    approved: ApprovedIcon,
    disable: DisableIcon,
    error: ErrorIcon,
}

export default function ComlpexTable({ isTablePage }: TablesProps) {
    const names = ['name', 'status', 'date', 'progress']
    const [sortedTable, setSortedTable] = useState<ComplexTableDataType[]>(complexTableMock)

    const statusOrder = {
        approved: 0,
        disable: 1,
        error: 2,
    }

    const onClickMore = () => {
        setSortedTable(prev => [...prev].sort((a, b) => {
            return statusOrder[a.status] - statusOrder[b.status]
        }))
    }

    return (
        <LayoutTable
            title='Complex Table'
            tableCellNames={names}
            buttonMoreText='Sorted by status'
            onClickMore={onClickMore}
            isTablePage={isTablePage}
        >
            {
                sortedTable.map(row => (
                    <TableRow key={row.id}>
                        <TableCell>
                            {row.name}
                        </TableCell>

                        <TableCell>
                            {(() => {
                                const Icon = statusConfig[row.status]
                                return (
                                    <div className={s.status}>
                                        <Icon />
                                        <span>{row.status}</span>
                                    </div>
                                )
                            })()}
                        </TableCell>

                        <TableCell>
                            {formatDateEU(row.date)}
                        </TableCell>

                        <TableCell>
                            <ProgressBar
                                value={row.progress}
                            />
                        </TableCell>
                    </TableRow>
                ))
            }
        </LayoutTable>
    )
}
