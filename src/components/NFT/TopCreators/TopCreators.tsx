import s from './TopCreators.module.scss'

import ListLayout from '../../UI/ListLayout/ListLayout'
import { topCreatorsMock } from '../../../mocks/nft/topCreators'
import { useState } from 'react'
import ModalLayout from '../../UI/ModalLayout/ModalLayout'
import TopCreatorsList from './TopCreatorsList'

export default function TopCreators() {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const sortedCreator = [...topCreatorsMock].sort((a, b) => b.rating - a.rating)
    const title = 'Top Creators'

    return (
        <ListLayout
            title={title}
            onClick={() => { setOpenModal(true) }}
        >
            <div className={s.columns}>
                <span>
                    Name
                </span>
                <span>
                    Artworks
                </span>
                <span>
                    Rating
                </span>
            </div>
            <TopCreatorsList
                sortedCreator={sortedCreator.slice(0, 8)}
            />

            {
                openModal &&
                <ModalLayout
                    title={title}
                    onClose={() => setOpenModal(false)}
                    children={<TopCreatorsList sortedCreator={sortedCreator} />}
                />
            }
        </ListLayout>
    )
}
