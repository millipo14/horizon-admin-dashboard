import s from './Avatars.module.scss'

interface AvatarsProps {
    count: number;
    avatars: string[];
}

export default function Avatars({count, avatars}:AvatarsProps) {
  return (
      <div className={s.participants}>
          {
              avatars.map(url =>
                  <img
                      key={url}
                      src={url}
                      alt='avatar'
                      className={s.avatar}
                  />
              )
          }
          <div className={s.remaining}>
              {count}+
          </div>
      </div>
  )
}
