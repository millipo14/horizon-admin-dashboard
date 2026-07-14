import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import s from './Root.module.scss'

export default function Root() {
    return (
        <div className={s.root}>
            <Sidebar />
            <main className={s.container}>
                <Outlet />
            </main>
        </div>
    )
}
