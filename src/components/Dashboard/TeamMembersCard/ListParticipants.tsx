import s from './TeamMembersCard.module.scss'

import type { TeamMembersType } from '../../../types/mocksTypes'

interface ListParticipantsProps {
    under_added: TeamMembersType[];
    addParticipant: (item: TeamMembersType) => void;
}

export default function ListParticipants({ under_added, addParticipant }: ListParticipantsProps) {
    return (
        <ul className={s.addParticipantsList}>
            {
                under_added.map(item =>
                    <li
                        key={item.id}
                        className={s.addParticipantsItem}
                        onClick={() => addParticipant(item)}
                    >
                        <p className={s.addParticipantsName}>
                            {item.name}
                        </p>
                        <p className={s.addParticipantsPosition}>
                            {item.position}
                        </p>
                    </li>
                )
            }
        </ul>
    )
}
