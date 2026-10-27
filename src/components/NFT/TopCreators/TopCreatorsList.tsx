import s from './TopCreators.module.scss'

import type { TopCreatorType } from '../../../types/mocksNftTypes'

type TopCreatorsListProps = {
    sortedCreator: TopCreatorType[];
}

export default function TopCreatorsList({ sortedCreator }: TopCreatorsListProps) {
    return (
        <ul className={s.list}>
            {
                sortedCreator.map(creator =>

                    <li
                        key={creator.id}
                        className={s.row}>
                        <div className={s.nameCol}>
                            <img src={creator.avatar} className={s.avatar} />
                            <span className={s.username}>{creator.username}</span>
                        </div>
                        <span className={s.artworksCol}>{creator.artworks}</span>
                        <div className={s.ratingCol}>
                            <div className={s.ratingBar}>
                                <div
                                    className={s.ratingFill}
                                    style={{ width: `${creator.rating}%` }}
                                />
                            </div>
                        </div>
                    </li>

                )
            }
        </ul>

    )
}
