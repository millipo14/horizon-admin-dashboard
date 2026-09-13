import s from './DashboardCards.module.scss'

import ArrowSelect from '../../../assets/dashboard/cardIcons/arrowSelect.svg?react'

import { dashboardCardsData } from '../../../mocks/dashboardData'

import DashboardLayout from '../../UI/DashboardLayout/DashboardLayout'

export default function DashboardCards() {
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
                                    <dd className={s["cardValue"]}>{card.value}
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
                                            <select className={s.dropdown}>
                                                {/* options */}
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
