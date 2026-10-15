import s from './NftCatalogPage.module.scss'

import { useState } from "react";
import { categoryTabs } from "../../../mocks/nft/categoryTabs";

import CategoryTabs from "./CategoryTabs/CategoryTabs";
import NftSection from "./NftSection/NftSection";
import { catalogCards } from '../../../mocks/nft/catalog';
import type { CatalogCardType } from '../../../types/mocksNftTypes';


export default function NftCatalog() {
    const [activeTab, setActiveTab] = useState<number>(categoryTabs[0].id)
    const [cards, setCards] = useState<CatalogCardType[]>(catalogCards)

    const handleLike = (id: number) => {
        setCards(prevCards => prevCards.map(card => (
            card.id === id ?
                { ...card, liked: !card.liked }
                : card
        )))
    }

    return (
        <div className={s.catalog}>
            <div className={s.header}>
                <h2>
                    Trending NFTs
                </h2>
                <CategoryTabs
                    activeTabId={activeTab}
                    onChange={setActiveTab}
                    tabs={categoryTabs}
                />
            </div>

            <div className={s.sections}>
                <NftSection
                    cards={cards.filter(card => card.section === 'trending')}
                    onLike={handleLike}
                />
                <NftSection
                    title='Recently Added'
                    cards={cards.filter(card => card.section === 'recently')}
                    onLike={handleLike}
                />
            </div>
        </div>

    )
}
