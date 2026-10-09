import s from './DashboardCards.module.scss'

import ArrowSelect from '../../../assets/dashboard/cardIcons/arrowSelect.svg?react'

import { dashboardCardsData } from '../../../mocks/dashboardData'
import { useState } from 'react'

import DashboardLayout from '../../UI/DashboardLayout/DashboardLayout'
import type { Currencies } from '../../../types/mocksTypes'

export default function DashboardCards() {
    const [option, setOption] = useState<Currencies>('USD')

    const exchangeRaties: Record<Currencies, number> = {
        USD: 1,
        EUR: 0.92,
        RUB: 90,
    }

    const balanceFormat = (value: number | string) => {
        if (typeof value === 'number') {
            const balance = value * exchangeRaties[option]
            const formattedBalance = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: option,
                maximumFractionDigits: 0,
                notation: 'compact',
            }).format(balance)

            return formattedBalance
        }
    }


    return (
        <div className={s["listCards"]}>
            {
                dashboardCardsData.map(card => {
                    const isRightLayout = card.type === 'balance' || card.type === 'sales'
                    if (!isRightLayout) {
                        return (
                            <DashboardLayout key={card.id} className={s.card}>
                                <img src={card?.icon} alt={card.title} className={s.cardImg} />
                                <dl className={s["cardDetails"]}>
                                    <dt className={s["cardTitle"]}>{card.title}</dt>
                                    <dd className={s["cardValue"]}>{card.value}</dd>
                                </dl>
                            </DashboardLayout>
                        )
                    } else {
                        return (
                            <DashboardLayout key={card.id} className={s.card}>
                                <dl className={s["cardDetails"]}>
                                    <dt className={s["cardTitle"]}>{card.title}</dt>
                                    <dd className={s["cardValue"]}>
                                        {
                                            card.type === 'balance' ? balanceFormat(card.value) : card.value

                                        }
                                        {card?.change &&
                                            <div className={s.change}>
                                                <span className={s["changePercent"]}>{card.change.percent}</span>
                                                <span className={s["changeText"]}>{card.change.text}</span>
                                            </div>
                                        }
                                    </dd>
                                </dl>
                                <div className={s["rightSide"]}>
                                    {card.icon && <img src={card?.icon} alt={card.title} className={s.cardImg} />}
                                    {card.additionalElement &&
                                        <div className={s.selectWrapper}>
                                            <select className={s.dropdown}
                                                value={option}
                                                onChange={(event) => {
                                                    setOption(event.target.value as Currencies)
                                                }}
                                            >
                                                {card.additionalElement.currencies.map(currency => (
                                                    <option key={currency} value={currency}>
                                                        {currency}
                                                    </option>
                                                ))}
                                            </select>
                                            <ArrowSelect className={s.selectArrow} />
                                        </div>
                                    }
                                </div>
                            </DashboardLayout>)
                    }
                })
            }
        </div>
    )
}
