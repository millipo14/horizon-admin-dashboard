import { Box, LinearProgress } from '@mui/material'
import s from './ProgressBar.module.scss'

interface ProgressBarProps {
    label?: number;
    value: number;
}

export default function ProgressBar({ label, value }: ProgressBarProps) {
    return (
        <div className={s.progress} >
            {label && <span>{label}%</span>}
            <Box sx={{ width: '108px' }}>
                <LinearProgress
                    variant='determinate'
                    value={value}
                    className={s.progressBar}
                />
            </Box>
        </div>
    )
}
