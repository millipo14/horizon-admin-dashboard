import type { CatalogCardType } from '../../../../types/mocksNftTypes';
import DashboardLayout from '../../../UI/DashboardLayout/DashboardLayout';
import s from './NftSection.module.scss'

interface NftSectionProps {
  title?: string;
  cards: CatalogCardType[];
}

export default function NftSection({ title, cards }: NftSectionProps) {
  return (
    <div>
      {title &&
        <h2 className={s.sectionTitle}>
          {title}
        </h2>
      }
      <div className={s.cards}>
        {
          cards.map(card =>
            <DashboardLayout key={card.id} className={s.card}>
              <img src={card.image} alt={card.title} className={s.image} />
              <div className={s.content}>
                <div className={s.info}>
                  <div className={s.titles}>
                    <h3 className={s.title}>
                      {card.title}
                    </h3>
                    <span className={s.author}>
                      {card.author}
                    </span>
                  </div>
                  <div className={s.bidders}>
                    {/* {card.bidders} */}
                  </div>
                  <div className={s.footer}>
                    <div className={s.bid}>
                      Current Bid: {card.currentBid} ETH
                    </div>
                    <button
                      type='button'
                      className={s.btn}
                      onClick={() => { }}
                    >
                      Place Bid
                    </button>
                  </div>
                </div>
              </div>
            </DashboardLayout>
          )
        }
      </div>
    </div>
  )
}
