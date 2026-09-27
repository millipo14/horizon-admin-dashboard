import s from './LayoutTable.module.scss'

import MoreIcon from '../../../assets/dashboard/icons/more.svg?react'

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import DashboardLayout from '../DashboardLayout/DashboardLayout'
import { useState, type ReactNode } from 'react';

interface LayoutTableProps {
    title: string;
    onClickMore?: () => void;
    buttonMoreText?: string;
    tableCellNames: string[];
    children: ReactNode;
}


export default function LayoutTable({ title, onClickMore, buttonMoreText, tableCellNames, children }: LayoutTableProps) {
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

                    {isOpen && (
                        <div className={s.dropdown}>
                            <button className={s.btnDelet}
                                onClick={onClickMore}>
                                {buttonMoreText}
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <TableContainer component={Paper} className={s.tableContainer}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                tableCellNames.map(item => (
                                    <TableCell
                                        key={item}
                                        className={s.headCell}>{item.toUpperCase()}</TableCell>
                                ))
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
