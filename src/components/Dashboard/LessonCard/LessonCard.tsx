import s from './LessonCard.module.scss'

import LessonIcon from '../../../assets/dashboard/lessonCardIcons/lesson_icon.svg?react'
import TimeIcon from '../../../assets/dashboard/lessonCardIcons/time_lesson.svg?react'
import VideoIcon from '../../../assets/dashboard/lessonCardIcons/video.svg?react'

import { useState } from 'react'
import { lessonAvatarsMock } from '../../../mocks/dashboardPage/lessonAvatars'

import DashboardLayout from '../../UI/DashboardLayout/DashboardLayout'
import ModalVideoFrame from '../../UI/ModalVideoFrame/ModalVideoFrame'
import Avatars from '../../UI/Avatars/Avatars'


const lessonName = 'What do you need to know to create better products ? '

export default function LessonCard() {
    const [isOpen, setIsOpen] = useState(false)

    const viewAvatar = lessonAvatarsMock.slice(0, 4)
    const countRemaining = lessonAvatarsMock.length - viewAvatar.length

    return (
        <DashboardLayout>
            <header className={s.header}>
                <div className={s.lesson_icon}>
                    <LessonIcon />
                </div>
                <div className={s.titles}>
                    <div className={s.subtitle}>
                        Business Design
                    </div>
                    <div className={s.title}>
                        New lession is available
                    </div>
                </div>
            </header>
            <h2 className={s.lesson_name}>
                {lessonName}
            </h2>
            <div className={s.background}>
                <div className={s.actions}>
                    <div className={s.lesson_time}>
                        <TimeIcon />
                        <span>85 mins</span>
                    </div>
                    <div className={s.lesson_format}>
                        <VideoIcon />
                        <span>Video format</span>
                    </div>
                </div>
                <div className={s.footer}>
                    <Avatars
                        count={countRemaining}
                        avatars={viewAvatar.map(avatar => avatar.avatar)}
                    />
                    <button
                        type="button"
                        onClick={() => setIsOpen(true)}
                        className={s.button}>
                        Get Started
                    </button>
                </div>
            </div>
            {isOpen && (
                <ModalVideoFrame
                    onClose={() => setIsOpen(false)}
                    titleVideo={lessonName}
                    src="https://www.youtube.com/embed/ADPAY0opHWI"
                    className={s.iframe}
                />
            )}
        </DashboardLayout>
    )
}
