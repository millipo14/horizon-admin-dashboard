import s from './NftHistory.module.scss'

import NftCoin from '../../../assets/nft/nftCoin.svg?react'

import cn from 'classnames'

import type { HistoryType } from '../../../types/mocksNftTypes'

type HistoryListProps = {
    historyList: HistoryType[];
    onClick: (id: number) => void;
    activeId: number;
}

export default function HistoryList({ historyList, onClick, activeId }: HistoryListProps) {
    return (
        <ul className={s.list}>
            {
                historyList.map(item =>
                    <li
                        key={item.id}
                        className={cn(s.item, activeId === item.id && s.active)}
                        onClick={() => onClick(item.id)}
                    >
                        <div className={s.header}>
                            <img className={s.image} src={item.image} alt={item.title} />
                            <div className={s.titles}>
                                <h3 className={s.title}>
                                    {item.title}
                                </h3>
                                <span className={s.author}>
                                    By {item.author}
                                </span>
                            </div>
                        </div>
                        <div className={s.coin}>
                            <div>
                                <NftCoin />
                            </div>
                            <span>{item.currentBid}</span>
                        </div>
                        <div className={s.time}>
                            {item.time}
                        </div>
                    </li>
                )
            }
        </ul>
    )
}
