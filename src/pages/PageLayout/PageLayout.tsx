import s from './PageLayout.module.scss'

import Search from '../../components/Dashboard/Search/Search'
import Breadcrumbs from '../../components/UI/Breadcrumbs/Breadcrumbs'

import type { ReactNode } from 'react';

interface PageLayoutProps {
    title: string;
    children: ReactNode;
}

export default function PageLayout({ title, children }: PageLayoutProps) {
    return (
        <main>
            <header className={s.header}>
                <div className={s.leftSection}>
                    <Breadcrumbs />
                    <h1 className={s["title"]}>
                        {title}
                    </h1>
                </div>
                <div className={s.rightSection}>
                    <Search />
                </div>
            </header>
            {children}
        </main>
    )
}
