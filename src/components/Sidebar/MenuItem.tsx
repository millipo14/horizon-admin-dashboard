import s from './Sidebar.module.scss'

import cn from 'classnames'
import { NavLink } from "react-router-dom";

import type { MenuItemProps } from './MenuItemType';

export default function MenuItem({ to, icon: Icon, children }: MenuItemProps) {
    return (
        <NavLink to={to} className={({ isActive }) => cn(s.link, s.subtitle, isActive && s.linkActive)} >
            {({ isActive }) => (
                <>
                    <Icon className={cn(s.icon, isActive && s.linkActiveIcon)} />
                    <span>{children}</span>
                </>
            )}
        </ NavLink>
    )
}
