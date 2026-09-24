import s from './DailyTraffic.module.scss'

interface DailyTrafficTooltipProps {
    active?: boolean;
    payload?: Array<{ value: number }>;
}

export default function DailyTrafficTooltip({ active, payload }: DailyTrafficTooltipProps) {
    if (!active || !payload?.length) {
        return null;
    }

    return (
        <div className={s.tooltip}>
            <strong>{payload[0].value} visitors</strong>
        </div>
    );
}

