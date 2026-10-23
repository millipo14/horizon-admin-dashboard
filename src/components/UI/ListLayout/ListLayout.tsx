import s from './ListLayout.module.scss'

import DashboardLayout from '../DashboardLayout/DashboardLayout'

import type { ReactNode } from 'react';

type ListLayoutProps = {
  title: string;
  onClick: () => void;
  children: ReactNode;
}

export default function ListLayout({ title, onClick, children }: ListLayoutProps) {
  return (
    <DashboardLayout className={s.padding}>
      <div className={s.content}>
        <h2 className={s.title}>
          {title}
        </h2>
        <button
          onClick={onClick}
          className={s.buttonAll}>
          See all
        </button>
      </div>

      <div className={s.children}>
        {children}
      </div>
    </DashboardLayout>
  )
}
