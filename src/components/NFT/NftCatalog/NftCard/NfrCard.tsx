import s from './NftCard.module.scss'

import LikeIcon from '../../../../assets/nft/likeIcon.svg?react'

import cn from 'classnames'

import DashboardLayout from '../../../UI/DashboardLayout/DashboardLayout';
import Avatars from '../../../UI/Avatars/Avatars';

import type { CatalogCardType } from '../../../../types/mocksNftTypes';

type NftCardProps = {
    card: CatalogCardType;
    onLike: (id: number) => void;
}

export default function NfrCard({ card, onLike }: NftCardProps) {
    return (
        <DashboardLayout className={s.card}>
            <button
                onClick={() => onLike(card.id)}
                className={cn(s.favorite, card.liked ? s.like : s.notLike)}>
                <LikeIcon />
            </button>
            <img src={card.image} alt={card.title} className={s.image} />
            <div className={s.content}>

                <div className={s.info}>
                    <div className={s.titles}>
                        <h3 className={s.title}>
                            {card.title}
                        </h3>
                        <span className={s.author}>
                            By {card.author}
                        </span>
                    </div>

                    <Avatars
                        count={card.extraBiddersCount}
                        avatars={card.bidders}
                    />

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
        </DashboardLayout>
    )
}
