import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import s from './Dashboard.module.scss'
import DashboardCards from "./DashboardCards/DashboardCards";
import Search from "./Search/Search";

export default function Dashboard() {
  return (
    <>
      <div className={s.headerDashboard}>
        <div className={s.leftSection}>
          <Breadcrumbs />
          <div className={s["title"]}>Main Dashboard</div>
        </div>
        <div className={s.rightSection}>
          <Search />
        </div>

      </div>
      <DashboardCards />
    </>
  )
}
