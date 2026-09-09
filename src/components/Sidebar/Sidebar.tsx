import s from './Sidebar.module.scss'

import DashboardIcon from '../../assets/sidebarIcons/dashboard.svg?react'
import NftIcon from '../../assets/sidebarIcons/nft.svg?react'
import TablesIcon from '../../assets/sidebarIcons/tables.svg?react'
import KanbanIcon from '../../assets/sidebarIcons/kanban.svg?react'
import ProfileIcon from '../../assets/sidebarIcons/profile.svg?react'
import SignIcon from '../../assets/sidebarIcons/sign.svg?react'
import ProIcon from '../../assets/sidebarIcons/proIcon.svg?react'
import GetProIcon from '../../assets/sidebarIcons/getPROIcon.svg?react'

import MenuItem from "./MenuItem";

import { ROUTES } from '../../routes/routes'
import type { MenuItemProps } from './MenuItemType'

const MENU_ITEMS: MenuItemProps[] = [
    { to: ROUTES.DASHBOARD, icon: DashboardIcon, children: 'Dashboard' },
    { to: ROUTES.NFT, icon: NftIcon, children: 'NFT Marketplace' },
    { to: ROUTES.TABLES, icon: TablesIcon, children: 'Tables' },
    { to: ROUTES.KANBAN, icon: KanbanIcon, children: 'Kanban' },
    { to: ROUTES.PROFILE, icon: ProfileIcon, children: 'Profile' },
    { to: ROUTES.SIGN_IN, icon: SignIcon, children: 'Sign In' },
]

export default function Sidebar() {
    return (
        <aside className={s.sidebar}>
            <h2 className={s.title}>HORIZON<span>FREE</span></h2>
            <div className={s.separator}></div>
            <div className={s.list}>
                {MENU_ITEMS.map(item => (
                    <MenuItem key={item.to} to={item.to} icon={item.icon} >
                        {item.children}
                    </MenuItem>
                ))}
            </div>
            <div className={s.pro}>
                <ProIcon className={s.proIcon} />
                <GetProIcon className={s.getProIcon} />
            </div>
        </aside>
    )
}