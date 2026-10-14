import s from './DashboardPage.module.scss'

import DashboardCards from '../../components/Dashboard/DashboardCards/DashboardCards'
import SpentChart from '../../components/Dashboard/SpentChart/SpentChart'
import WeeklyRevenue from '../../components/Dashboard/WeeklyRevenue/WeeklyRevenue'
import CheckTable from '../../components/Dashboard/CheckTable/CheckTable'
import DailyTraffic from '../../components/Dashboard/DailyTraffic/DailyTraffic'
import StorageChart from '../../components/Dashboard/StorageChart/StorageChart'
import ComlpexTable from '../../components/Dashboard/ComlpexTable/ComlpexTable'
import Tasks from '../../components/Dashboard/Tasks/Tasks'
import Calendar from '../../components/Dashboard/Calendar/Calendar'
import LessonCard from '../../components/Dashboard/LessonCard/LessonCard'
import TeamMembersCard from '../../components/Dashboard/TeamMembersCard/TeamMembersCard'
import PromoCard from '../../components/Dashboard/PromoCard/PromoCard'
import OfferCard from '../../components/Dashboard/OfferCard/OfferCard'
import PageLayout from '../PageLayout/PageLayout'

export default function DashboardPage() {
  return (
    <PageLayout
      title='Main Dashboard'
    >
      <section aria-label="Summary statistics">
        <DashboardCards />
      </section>

      <section className={s.widgetsGrid} aria-label="Dashboard analytics">
        <SpentChart />
        <WeeklyRevenue />
        <CheckTable />
        <div className={s.graphs}>
          <DailyTraffic />
          <StorageChart />
        </div>
        <ComlpexTable />
        <div className={s.graphs}>
          <Tasks />
          <Calendar />
        </div>
        <div className={s.graphs}>
          <LessonCard />
          <TeamMembersCard />
        </div>
        <div className={s.graphs}>
          <PromoCard />
          <OfferCard />
        </div>
      </section>
    </PageLayout>
  )
}
