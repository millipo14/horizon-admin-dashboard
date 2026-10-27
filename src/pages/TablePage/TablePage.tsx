import s from './TablePage.module.scss'

import PageLayout from '../PageLayout/PageLayout'
import CheckTable from '../../components/Dashboard/CheckTable/CheckTable'
import ComlpexTable from '../../components/Dashboard/ComlpexTable/ComlpexTable'

export default function TablePage() {
  return (
    <PageLayout
      title='Tables'
    >
      <div className={s.content}>
        <CheckTable isTablePage={true} />
        <CheckTable isTablePage={true} />
        <CheckTable isTablePage={true} />
        <ComlpexTable isTablePage={true} />
      </div>
    </PageLayout>
  )
}
