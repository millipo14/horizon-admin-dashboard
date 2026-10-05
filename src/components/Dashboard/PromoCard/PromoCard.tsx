import s from './PromoCard.module.scss'

import PromoIcon from '../../../assets/dashboard/icons/promoIcon.svg?react'

import DashboardLayout from '../../UI/DashboardLayout/DashboardLayout'

export default function PromoCard() {
    return (
        <DashboardLayout className={s.promoCard}>
            <PromoIcon />
            <h2 className={s.title}>
                Control card security <br />
                in-app with a tap
            </h2>
            <p className={s.subtitle}>
                Discover our cards benefits, with one tap.
            </p>
            <button
                type="button"
                className={s.btn}
            >
                Cards
            </button>
        </DashboardLayout>
    )
}
