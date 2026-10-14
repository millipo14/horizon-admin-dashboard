import s from './CategoryTabs.module.scss'

import cn from 'classnames'

import type { CategoryTabType } from '../../../../types/mocksNftTypes';

interface CategoryTabsProps {
  activeTabId: number;
  onChange: (id: number) => void;
  tabs: CategoryTabType[];
}

export default function CategoryTabs({ activeTabId, onChange, tabs }: CategoryTabsProps) {

  return (
    <ul className={s.list}>
      {
        tabs.map(tab => (
          <li
            onClick={() => onChange(tab.id)}
            key={tab.id}
            className={cn(s.tab, activeTabId === tab.id ? s.active : '')}>
            {tab.label}
          </li>
        ))
      }
    </ul>
  )
}
