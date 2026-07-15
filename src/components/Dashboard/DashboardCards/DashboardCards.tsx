import { dashboardCardsData } from '../../../mocks/dashboardData'
import s from './DashboardCards.module.scss'

export default function DashboardCards() {
    return (
        <div className={s["listCards"]}>
            {
                dashboardCardsData.map(card => {
                    const isRightLayout = card.type === 'balance' || card.type === 'sales'
                    if (!isRightLayout) {
                        return (
                            <div key={card.id} className={s.card}>
                                <img src={card?.icon} alt={card.title} className={s.cardImg} />
                                <div className={s["cardDetails"]}>
                                    <div className={s["cardTitle"]}>{card.title}</div>
                                    <div className={s["cardValue"]}>{card.value}</div>
                                </div>
                            </div>
                        )
                    } else {
                        return (<div key={card.id} className={s.card}>
                            <div className={s["cardDetails"]}>
                                <div className={s["cardTitle"]}>{card.title}</div>
                                <div className={s["cardValue"]}>{card.value}</div>
                                {card?.change &&
                                    <div className={s.change}>
                                        <div className={s["changePercent"]}>{card?.change.percent}</div>
                                        <div className={s["changeText"]}>{card?.change.text}</div>
                                    </div>
                                }
                            </div>
                            <div className={s["rightSite"]}>
                                {card?.icon && <img src={card?.icon} alt={card.title} className={s.cardImg} />}
                                {card.additionalElement && <select className={s.dropdown}></select>}
                            </div>
                        </div>)
                    }
                })
            }
        </div>
    )
}
