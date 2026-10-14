import s from './ModalVideoFrame.module.scss'

import cn from 'classnames'

import { useEffect } from 'react';

interface ModalVideoFrameProps {
    onClose: () => void;
    titleVideo: string;
    src: string;
    className?: string;
}

export default function ModalVideoFrame({ onClose, titleVideo, src, className }: ModalVideoFrameProps) {
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
                    src={src}
                    title={titleVideo}
                    allow='encrypted-media;'
                    allowFullScreen
                    className={cn(s.iframe, className)}
                />
                <h2>
                    {titleVideo}
                </h2>
            </div>
        </div>
    )
}
