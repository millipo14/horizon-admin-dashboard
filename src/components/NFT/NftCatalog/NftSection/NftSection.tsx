import s from './NftSection.module.scss'

import NfrCard from '../NftCard/NfrCard';

import type { CatalogCardType } from '../../../../types/mocksNftTypes';

interface NftSectionProps {
  title?: string;
  cards: CatalogCardType[];
  onLike: (id: number) => void;
}

export default function NftSection({ title, cards, onLike }: NftSectionProps) {

  return (
    <div>
      {title &&
        <h2 className={s.sectionTitle}>
          {title}
        </h2>
      }
      {
        cards.length === 0
          ? <p className={s.emptyCards}>No NFTs found in this category</p>
          : <div className={s.cards}>
            {cards.map(card =>
              <NfrCard
                key={card.id}
                card={card}
                onLike={onLike}
              />
            )
            }
          </div>
      }
    </div>
  )
}
