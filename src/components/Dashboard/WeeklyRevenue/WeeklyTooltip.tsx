import s from './WeeklyRevenue.module.scss';

import type { WeeklyDataType, WeeklyPeriod } from '../../../types/mocksTypes';

interface WeeklyItem {
    dataKey: keyof Omit<WeeklyDataType, 'day'>;
    value: number;
}

interface WeeklyTooltipProps {
    active?: boolean;
    payload?: WeeklyItem[];
    label?: WeeklyPeriod;
    metric: 'revenue' | 'orders';
}

export default function WeeklyTooltip({ active, payload, label, metric }: WeeklyTooltipProps) {
    if (!active || !payload?.length) return null;
    const total = payload.reduce((sum, item) => sum + item.value, 0)
    const isRevenue = metric === 'revenue'

    return (
        <div className={s.tooltip}>
            <p className={s.tooltip__title}>{label}</p>

            <div className={s.tooltip__items}>
                {payload.map((item) => (
                    <div className={s.tooltip__item} key={item.dataKey}>
                        <span className={s.tooltip__name}>
                            {item.dataKey}
                        </span>

                        <span className={s.tooltip__value}>
                            {
                                isRevenue && '$'
                            }
                            {item.value.toLocaleString()}
                        </span>
                    </div>
                ))}
            </div>

            <div className={s.tooltip__total}>
                <span>Total</span>
                <span>
                    {
                        isRevenue && '$'
                    }
                    {total.toLocaleString()}</span>
            </div>
        </div>
    )
}
