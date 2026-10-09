import { useEffect } from 'react';
import s from './LessonModal.module.scss'

interface LessonModalProps {
    onClose: () => void;
    lessonName: string;
}

export default function LessonModal({ onClose, lessonName }: LessonModalProps) {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose()
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [onClose])

    return (
        <div className={s['modal-overlay']} onClick={onClose}>
            <div
                role="dialog"
                aria-modal="true"
                className={s.modal}
                onClick={e => e.stopPropagation()}>
                <iframe
                    src='https://www.youtube.com/embed/ADPAY0opHWI'
                    title={lessonName}
                    allow='encrypted-media;'
                    allowFullScreen
                    className={s.iframe}
                />
                <h2 className={s.lesson_name}>
                    {lessonName}
                </h2>
            </div>
        </div>
    )
}
