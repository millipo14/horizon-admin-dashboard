import type { SVGProps } from "react";

//Check Tables Mocks
export interface TableDataType {
    id: number;
    name: string;
    progress: number;
    quantity: number;
    date: string;
}

//Complex Tables Mocks
export type StatusComplexTable = 'approved' | 'disable' | 'error'

export interface ComplexTableDataType {
    id: number;
    name: string;
    status: StatusComplexTable;
    date: string;
    progress: number;
}

export interface DevelopmentTableType {
    id: number;
    name: string;
    platforms: FC<SVGProps<SVGSVGElement>>[];
    date: string;
    progress: number;
}

export interface ProjectTableType {
    id: number;
    name: string;
    progress: number;
    tasks: number;
    date: string;
}