import s from './OfferCard.module.scss'

import background from '../../../assets/dashboard/offerCardIcons/backgroundStarbucks.png'
import EatIcon from '../../../assets/dashboard/offerCardIcons/eatIcon.svg?react'
import TimeIcon from '../../../assets/dashboard/offerCardIcons/timeOfferCard.svg?react'
import Logo from '../../../assets/dashboard/offerCardIcons/logoStarbucks.svg?react'

import DashboardLayout from '../../UI/DashboardLayout/DashboardLayout'

export default function OfferCard() {
    return (
        <DashboardLayout>
            <div className={s.background}>
                <div className={s.background__imgWrapper}>
                    <img src={background} className={s.background__img} />
                </div>
                <div className={s.background__time}>
                    <TimeIcon />
                </div>
                <div className={s.background__logo}>
                    <Logo />
                </div>
            </div>
            <h2 className={s.title}>
                Starbucks
            </h2>
            <p className={s.subtitle}>
                <EatIcon />
                10% cashback & off
            </p>

        </DashboardLayout>
    )
}
