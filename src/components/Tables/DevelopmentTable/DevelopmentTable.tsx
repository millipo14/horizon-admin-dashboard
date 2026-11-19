import s from './DevelopmentTable.module.scss'

import { TableCell, TableRow } from '@mui/material'
import { developmentTableMock } from '../../../mocks/tables/developmentTable'
import { formatDateUS } from '../../../utils/formatDate'

import LayoutTable from '../../UI/LayoutTable/LayoutTable'

import ProgressBar from '../../UI/ProgressBar/ProgressBar'
import { useState } from 'react'

export default function DevelopmentTable() {

    const names = ['Name', 'Platform', 'Date', 'Progress']

    const [onlyMulti, setOnlyMulti] = useState(false)

    const rows = onlyMulti
        ? developmentTableMock.filter(row => row.platforms.length > 1)
        : developmentTableMock

    return (
        <LayoutTable
            title='Development Table'
            tableCellNames={names}
            buttonMoreText={onlyMulti ? 'Show all platforms' : 'Multi-platform only'}
            onClickMore={() => setOnlyMulti(prev => !prev)}
        >
            {rows.map((row) => (
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
