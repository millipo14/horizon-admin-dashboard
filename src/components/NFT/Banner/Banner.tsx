import { useState } from 'react'
import s from './Banner.module.scss'
import ModalVideoFrame from '../../UI/ModalVideoFrame/ModalVideoFrame'

export default function Banner() {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className={s.banner}>
            <h2 className={s.title}>
                Discover, collect, and sell extraordinary NFTs
            </h2>
            <p className={s.subtitle}>
                Enter in this creative world. Discover now the <br /> latest NFTs or start creating your own!
            </p>
            <div className={s.buttons}>
                <button
                    type="button"
                    className={s.discover}
                    disabled
                >
                    Discover now
                </button>
                <button
                    type="button"
                    className={s.watch}
                    onClick={() => setOpenModal(true)}
                >
                    Watch video
                </button>
            </div>
            {
                openModal &&
                <ModalVideoFrame
                onClose={()=>setOpenModal(false)}
                titleVideo='nft info'
                    src="https://www.youtube.com/embed/rylhU4Fe74Y"
                />
            }
        </div>
    )
}
