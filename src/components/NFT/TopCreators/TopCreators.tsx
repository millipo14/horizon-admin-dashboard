import s from './TopCreators.module.scss'

import ListLayout from '../../UI/ListLayout/ListLayout'
import { topCreatorsMock } from '../../../mocks/nft/topCreators'

export default function TopCreators() {
    const filterCreator = topCreatorsMock.sort((a, b) => b.rating - a.rating)

    return (
        <ListLayout
            title='Top Creators'
            onClick={() => { }}
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
            <ul className={s.list}>
                {
                    filterCreator.slice(0, 8).map(creator =>
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
        </ListLayout>
    )
}
