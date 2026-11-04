import LayoutTable from '../../UI/LayoutTable/LayoutTable'

import { TableCell, TableRow } from '@mui/material'
import { formatDateUS } from '../../../utils/formatDate'
import { projectsTableMock } from '../../../mocks/tables/projectsTable'

import type { TablesProps } from '../../../types/props'

export default function ProjectsTable({ isTablePage }: TablesProps) {
    const names = ['Name', 'Progress', 'Tasks', 'Date']

    return (
        <LayoutTable
            title='Project Summary'
            tableCellNames={names}
            isTablePage={isTablePage}
        >
            {projectsTableMock.map((row) => (
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
