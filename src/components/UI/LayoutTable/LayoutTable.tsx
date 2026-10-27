import s from './LayoutTable.module.scss'

import MoreIcon from '../../../assets/dashboard/icons/more.svg?react'
import SortIcon from '../../../assets/dashboard/cardIcons/arrowSelect.svg?react'

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import cn from 'classnames'

import DashboardLayout from '../DashboardLayout/DashboardLayout'
import { useState, type ReactNode } from 'react';
import ActionButton from '../BtnDelete/ActionButton';


interface LayoutTableProps {
    title: string;
    onClickMore?: () => void;
    buttonMoreText?: string;
    tableCellNames: string[];
    children: ReactNode;
    isTablePage: boolean;
}


export default function LayoutTable({ title, onClickMore, buttonMoreText, tableCellNames, children, isTablePage }: LayoutTableProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <DashboardLayout>
            <div className={s.header}>
                <h2 className={s.title}>
                    {title}
                </h2>
                <div className={s.actions}>
                    <button className={s.icon}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <MoreIcon />
                    </button>

                    {isOpen && onClickMore && buttonMoreText &&
                        <ActionButton
                            onClick={onClickMore}
                            textBtn={buttonMoreText}
                        />
                    }
                </div>
            </div>
            <TableContainer component={Paper} className={s.tableContainer}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow
                            className={cn(isTablePage && s.tableNameList)}
                        >
                            {
                                tableCellNames.map(item =>
                                    isTablePage
                                        ? (
                                            <TableCell
                                            key={item}
                                            className={s.tableCellName}>
                                                <div className={s.cellContent}>
                                                    <span>{item}</span>
                                                    <span><SortIcon /></span>
                                                </div>
                                            </TableCell>

                                        )
                                        : (
                                            <TableCell
                                                key={item}
                                                className={s.headCell}
                                            >
                                                {item.toUpperCase()}
                                            </TableCell>
                                        )
                                )
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {children}
                    </TableBody>
                </Table>
            </TableContainer>
        </DashboardLayout>
    )
}
