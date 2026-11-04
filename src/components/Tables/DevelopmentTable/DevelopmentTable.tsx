import s from './DevelopmentTable.module.scss'

import { TableCell, TableRow } from '@mui/material'
import { developmentTableMock } from '../../../mocks/tables/developmentTable'
import { formatDateUS } from '../../../utils/formatDate'

import LayoutTable from '../../UI/LayoutTable/LayoutTable'

import type { TablesProps } from '../../../types/props'
import ProgressBar from '../../UI/ProgressBar/ProgressBar'

export default function DevelopmentTable({ isTablePage }: TablesProps) {
    const names = ['Name', 'Platform', 'Date', 'Progress']
    return (
        <LayoutTable
            title='Development Table'
            tableCellNames={names}
            isTablePage={isTablePage}
        >
            {developmentTableMock.map((row) => (
                <TableRow key={row.id}>
                    <TableCell>
                        {row.name}
                    </TableCell>

                    <TableCell className={s.platforms}>
                        {row.platforms.map((Icon, index) => (
                            <div key={index}>
                                <Icon />
                            </div>
                        ))}
                    </TableCell>

                    <TableCell>
                        {formatDateUS(row.date)}
                    </TableCell>

                    <TableCell>
                        <ProgressBar
                            label={row.progress}
                            value={row.progress}
                        />
                    </TableCell>

                </TableRow>
            )
            )}
        </LayoutTable>
    )
}
