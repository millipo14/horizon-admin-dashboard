import LayoutTable from '../../UI/LayoutTable/LayoutTable'

import { TableCell, TableRow } from '@mui/material'
import { formatDateUS } from '../../../utils/formatDate'
import { projectsTableMock } from '../../../mocks/tables/projectsTable'
import { useState } from 'react'

export default function ProjectsTable() {
    const names = ['Name', 'Progress', 'Tasks', 'Date']

    const [rows, setRows] = useState(projectsTableMock)

    return (
        <LayoutTable
            title='Project Summary'
            tableCellNames={names}
            buttonMoreText='Sorted by tasks'
            onClickMore={() => setRows(prev => [...prev].sort((a, b) => b.tasks - a.tasks))}
        >
            {rows.map((row) => (
                <TableRow key={row.id}>
                    <TableCell>
                        {row.name}
                    </TableCell>

                    <TableCell>
                        {row.progress}%
                    </TableCell>

                    <TableCell>
                        {row.tasks}
                    </TableCell>

                    <TableCell>
                        {formatDateUS(row.date)}
                    </TableCell>

                </TableRow>
            )
            )}
        </LayoutTable>
    )
}
