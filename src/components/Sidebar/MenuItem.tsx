import type { ComponentType, SVGProps } from "react"
import s from './Sidebar.module.scss'
import cn from 'classnames'
import { NavLink } from "react-router-dom";

interface MenuItemProps {
    to: string,
    icon: ComponentType<SVGProps<SVGSVGElement>>
    children: string
}


export default function MenuItem({ to, icon: Icon, children }: MenuItemProps) {
    return (
        <NavLink to={to}>
            {({ isActive }) => (
                <div className={cn(s.link, s.subtitle, isActive && s.linkActive)} >
                    <Icon className={cn(s.icon, isActive && s.linkActiveIcon)} />
                    <span>{children}</span>
                </div>
            )}
        </ NavLink>
    )
}
