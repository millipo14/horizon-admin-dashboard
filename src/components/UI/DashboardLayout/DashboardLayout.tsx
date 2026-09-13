import s from './DashboardLayout.module.scss'

import cn from 'classnames';

import type { ReactNode } from 'react';

interface DashboardLayoutProps {
    className?: string;
    children: ReactNode;
}

export default function DashboardLayout({ className, children }: DashboardLayoutProps) {
    return (
        <div className={cn(s.layout, className)}>
            {children} 
        </div>
    )
}
