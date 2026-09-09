import s from './DashboardPage.module.scss'

import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import DashboardCards from "./DashboardCards/DashboardCards";
import Search from "./Search/Search";

export default function Dashboard() {
  return (
    <main>
      <header className={s.headerDashboard}>
        <div className={s.leftSection}>
          <Breadcrumbs />
          <h1 className={s["title"]}>Main Dashboard</h1>
        </div>
        <div className={s.rightSection}>
          <Search />
        </div>
      </header>
      <section aria-label="Summary statistics">
        <DashboardCards />
      </section>

      <section className={s.widgetsGrid} aria-label="Dashboard analytics">

      </section>

    </main>
  )
}
