import { useState } from 'react'
import { historyMock } from '../../../mocks/nft/history'


import ListLayout from '../../UI/ListLayout/ListLayout'
import HistoryList from './HistoryList'
import ModalLayout from '../../UI/ModalLayout/ModalLayout'

export default function NftHistory() {
    const [activeId, setActiveId] = useState<number>(1)
    const [openModal, setOpenModal] = useState<boolean>(false)
    const title = 'History'

    return (
        <ListLayout
            title={title}
            onClick={() => { setOpenModal(true) }}
        >
            <HistoryList
                historyList={historyMock.slice(0, 6)}
                activeId={activeId}
                onClick={(id) => setActiveId(id)}
            />

            {
                openModal &&
                <ModalLayout
                    title={title}
                    onClose={() => setOpenModal(false)}
                    children={
                        <HistoryList
                            historyList={historyMock}
                            activeId={activeId}
                            onClick={(id) => setActiveId(id)}
                        />
                    }
                />
            }
        </ListLayout>
    )
}
