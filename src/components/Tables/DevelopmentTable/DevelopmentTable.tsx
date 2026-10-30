import s from './DevelopmentTable.module.scss'

import cn from 'classnames'
import { Box, LinearProgress, TableCell, TableRow } from '@mui/material'
import { developmentTableMock } from '../../../mocks/tables/developmentTable'
import { formatDateUS } from '../../../utils/formatDate'

import LayoutTable from '../../UI/LayoutTable/LayoutTable'

import type { TablesProps } from '../../../types/props'

export default function DevelopmentTable({ isTablePage }: TablesProps) {
    const names = ['Name', 'Platform', 'Date', 'Progress']
    return (
        <LayoutTable
            title='DevelopmentTable'
            tableCellNames={names}
            isTablePage={isTablePage}
        >
            {developmentTableMock.map((row) => (
                <TableRow key={row.id}>
                    <TableCell className={s.bodyCell}>
                        {row.name}
                    </TableCell>

                    <TableCell className={cn(s.bodyCell, s.platforms)}>
                        {row.platforms.map((Icon, index) => (
                            <div>
                                <Icon key={index} />
                            </div>
                        ))}
                    </TableCell>

                    <TableCell className={s.bodyCell}>
                        {formatDateUS(row.date)}
                    </TableCell>

                    <TableCell className={cn(s.bodyCell, s.progress)}>
                        <span>{row.progress}%</span>
                        <Box sx={{ width: '108px' }}>
                            <LinearProgress
                                variant='determinate'
                                value={row.progress}
                                className={s.progressBar}
                            />
                        </Box>
                    </TableCell>

                </TableRow>
            )
            )}
        </LayoutTable>
    )
}
