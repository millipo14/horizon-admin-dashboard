import s from './TablePage.module.scss'

import PageLayout from '../PageLayout/PageLayout'
import CheckTable from '../../components/Tables/CheckTable/CheckTable'
import ComlpexTable from '../../components/Tables/ComlpexTable/ComlpexTable'
import DevelopmentTable from '../../components/Tables/DevelopmentTable/DevelopmentTable'

export default function TablePage() {
  return (
    <PageLayout
      title='Tables'
    >
      <div className={s.content}>
        <DevelopmentTable isTablePage={true} />
        <CheckTable isTablePage={true} />
        <CheckTable isTablePage={true} />
        <ComlpexTable isTablePage={true} />
      </div>
    </PageLayout>
  )
}
