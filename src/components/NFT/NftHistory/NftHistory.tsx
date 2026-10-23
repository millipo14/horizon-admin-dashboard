import s from './NftHistory.module.scss'

import NftCoin from '../../../assets/nft/nftCoin.svg?react'

import { useState } from 'react'
import { historyMock } from '../../../mocks/nft/history'
import cn from 'classnames'

import ListLayout from '../../UI/ListLayout/ListLayout'

export default function NftHistory() {
    const [activeId, setActiveId] = useState<number>(1)

    return (
        <ListLayout
            title='History'
            onClick={() => { }}
        >
            <ul className={s.list}>
                {
                    historyMock.map(item =>
                        <li
                            key={item.id}
                            className={cn(s.item, activeId === item.id && s.active)}
                            onClick={() => setActiveId(item.id)}
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
        </ListLayout>
    )
}
