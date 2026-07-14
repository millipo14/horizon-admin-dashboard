import DashboardIcon from '../../assets/sidebarIcons/dashboard.svg?react'
import NftIcon from '../../assets/sidebarIcons/nft.svg?react'
import TablesIcon from '../../assets/sidebarIcons/tables.svg?react'
import KanbanIcon from '../../assets/sidebarIcons/kanban.svg?react'
import ProfileIcon from '../../assets/sidebarIcons/profile.svg?react'
import SignIcon from '../../assets/sidebarIcons/sign.svg?react'
import ProIcon from '../../assets/sidebarIcons/proIcon.svg?react'
import GetProIcon from '../../assets/sidebarIcons/getPROIcon.svg?react'
import s from './Sidebar.module.scss'
import MenuItem from "./MenuItem";


export default function Sidebar() {
    return (
        <section className={s.sidebar}>
            <h1 className={s.title}>HORIZON<span>FREE</span></h1>
            <div className={s.separator}></div>
            <div className={s.list}>
                <MenuItem to="/dashboard" icon={DashboardIcon}>Dashboard</MenuItem>
                <MenuItem to="/nft" icon={NftIcon}>NFT Marketplace</MenuItem>
                <MenuItem to='/tables' icon={TablesIcon}>Tables</MenuItem>
                <MenuItem to='/kanban' icon={KanbanIcon}>Kanban</MenuItem>
                <MenuItem to='/profile' icon={ProfileIcon}>Profile</MenuItem>
                <MenuItem to='/sign_in' icon={SignIcon}>Sign In</MenuItem>
            </div>
            <div className={s.pro}>
                <ProIcon className={s.proIcon} />
                <GetProIcon className={s.getProIcon} />
            </div>
        </section>
    )
}