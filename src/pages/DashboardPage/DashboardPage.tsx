import s from './DashboardPage.module.scss'

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import DashboardCards from '../../components/Dashboard/DashboardCards/DashboardCards'
import Search from '../../components/Dashboard/Search/Search'

export default function DashboardPage() {
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
