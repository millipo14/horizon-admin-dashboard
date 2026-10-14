import s from './NftPage.module.scss'

import PageLayout from '../PageLayout/PageLayout'
import Banner from '../../components/NFT/Banner/Banner'
import NftCatalog from '../../components/NFT/NftCatalog/NftCatalogPage'


export default function NftPage() {
    return (
        <PageLayout
            title='NFT Marketplace'
        >
            <div className={s.content}>
                <Banner />
              <NftCatalog />
            </div>

            <div className={s.sidebars}>

            </div>
        </PageLayout>
    )
}
