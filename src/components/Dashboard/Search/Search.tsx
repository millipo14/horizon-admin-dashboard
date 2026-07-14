import s from './Search.module.scss'
import SearchIcon from '../../../assets/dashboard/searchIcons/searchIcon.svg?react'
import NotificationsIcon from '../../../assets/dashboard/searchIcons/notifications_none.svg?react'
import MoonThemeIcon from '../../../assets/dashboard/searchIcons/moon-solid.svg?react'
import InfoIcon from '../../../assets/dashboard/searchIcons/info_outline.svg?react'
import avatar from '../../../assets/dashboard/searchIcons/avatar.png';
import { useState } from 'react'

export default function Search() {
  const [input, setInput] = useState<string>('')

  return (
    <section className={s["searchAndDetails"]}>
      <div className={s["details"]}>
        <div className={s.search}>
          <SearchIcon className={s.icon} />
          <input
            type="text"
            placeholder="Search"
            className={s.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <NotificationsIcon className={s.icons} />
        <MoonThemeIcon className={s.icons} />
        <InfoIcon className={s.icons} />
        <img src={avatar} alt='avatar' />

      </div>


    </section>
  )
}
