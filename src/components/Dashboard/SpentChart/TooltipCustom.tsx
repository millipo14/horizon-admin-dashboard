import s from './SpentChart.module.scss';

interface TooltipCustomProps {
    active?: boolean;
    payload?: Array<{ value: number }>;
}

export default function TooltipCustom({ active, payload }: TooltipCustomProps) {
    if (active && payload && payload.length) {
        return (
            <div
                className={s.tooltip}
            >
                ${payload[0].value}.00
            </div>
        )
    }
}
