import s from './ModalLayout.module.scss'

import type { ReactNode } from 'react';

interface ModalLayoutProps {
    onClose: () => void;
    children: ReactNode;
    title?: string;
}

export default function ModalLayout({ onClose, children, title }: ModalLayoutProps) {
    return (
        <div className={s['modal-overlay']} onClick={onClose}>
            <div
                role="dialog"
                aria-modal="true"
                className={s.modal}
                onClick={e => e.stopPropagation()}>
                <h2>{title}</h2>
                <div className={s.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}
