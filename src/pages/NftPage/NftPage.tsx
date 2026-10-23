import s from './NftPage.module.scss'

import PageLayout from '../PageLayout/PageLayout'
import Banner from '../../components/NFT/Banner/Banner'
import NftCatalog from '../../components/NFT/NftCatalog/NftCatalogPage'
import TopCreators from '../../components/NFT/TopCreators/TopCreators'
import NftHistory from '../../components/NFT/NftHistory/NftHistory'


export default function NftPage() {
    return (
        <PageLayout
            title='NFT Marketplace'
        >
            <div className={s.content}>
                <div className={s.main}>
                    <Banner />
                    <NftCatalog />
                </div>

                <aside className={s.sidebars}>
                    <TopCreators />
                    <NftHistory />

                </aside>
            </div>
            <div className={s.info}>
                <span>
                    © 2022 Horizon UI. All Rights Reserved. Made with love by <b>Simmmple!</b>
                </span>
                <div className={s.listInfo}>
                    <a href="#">Marketplace</a>
                    <a href="#">License</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Blog</a>
                </div>
            </div>

        </PageLayout>
    )
}
