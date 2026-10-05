import s from './TeamMembersCard.module.scss'

import AddBtn from '../../../assets/dashboard/icons/addBtn.svg?react'
import MoreBtn from '../../../assets/dashboard/icons/moreVert.svg?react'

import { teamMembersMock } from '../../../mocks/teamMembers'
import { useState } from 'react'

import DashboardLayout from '../../UI/DashboardLayout/DashboardLayout'
import ListParticipants from './ListParticipants'
import ActionButton from '../../UI/BtnDelete/ActionButton'

import type { TeamMembersType } from '../../../types/mocksTypes'

export default function TeamMembersCard() {
    const [isOpenParticipants, setIsOpenParticipants] = useState(false)
    const [openDelete, setOpenDelete] = useState<number | null>(null)
    const [viewTeam, setViewTeam] = useState(teamMembersMock.slice(0, 3))

    const under_added = teamMembersMock.filter(item => !viewTeam.some(viewItem => viewItem.id === item.id))

    const addParticipant = (item: TeamMembersType) => {
        setViewTeam([...viewTeam, item])
    }

    const deleteParticipant = (item: TeamMembersType) => {
        setViewTeam(viewTeam.filter(viewItem => viewItem.id !== item.id))
        setOpenDelete(null)
    }

    return (
        <DashboardLayout>
            <div className={s.header}>
                <h2 className={s.title}>
                    Team members
                </h2>
                <button
                    className={s.addBtn}
                    onClick={() => setIsOpenParticipants(prev => !prev)}
                >
                    <AddBtn />
                </button>
                {
                    isOpenParticipants && (
                        under_added.length > 0 ?
                            <ListParticipants
                                under_added={under_added}
                                addParticipant={addParticipant}
                            />
                            :
                            <div className={s.emptyParticipants}>
                                No participants available
                            </div>
                    )
                }
            </div>
            <ul className={s.list}>
                {
                    viewTeam.map(item => (
                        <li
                            className={s.item}
                            key={item.id}
                        >
                            <div className={s.info}>
                                <img className={s.avatar} src={item.avatar} alt={item.name} />
                                <dl className={s.participants}>
                                    <dt className={s.name}>
                                        {item.name}
                                    </dt>
                                    <dd className={s.position}>
                                        {item.position}
                                    </dd>
                                </dl>
                            </div>
                            <div className={s.actions}>
                                <button
                                    type="button"
                                    className={s.moreBtn}
                                    onClick={() => setOpenDelete(item.id)}
                                >
                                    <MoreBtn />
                                </button>

                                {openDelete === item.id && (
                                    <ActionButton
                                        onClick={() => deleteParticipant(item)}
                                        textBtn="Delete participant"
                                    />
                                )}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </DashboardLayout>
    )
}
