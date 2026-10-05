import s from './ActionButton.module.scss'

type ActionButtonProps = {
    onClick: () => void;
    textBtn: string;
}

export default function ActionButton({ onClick, textBtn }: ActionButtonProps) {
    return (
        <div className={s.dropdown}>
            <button className={s.btnDelet}
                onClick={onClick}>
                {textBtn}
            </button>
        </div>
    )
}
