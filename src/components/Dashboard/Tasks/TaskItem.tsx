import s from './Tasks.module.scss'

import DragIcon from '../../../assets/dashboard/icons/dragIcon.svg?react'

import cn from 'classnames'

import CustomCheckbox from '../../UI/CustomCheckbox/CustomCheckbox'

import type { TasksType } from '../../../types/mocksTypes'
import { useSortable } from '@dnd-kit/react/sortable'

type TaskItemProps = {
    index: number;
    task: TasksType;
    onChange: (task: TasksType) => void;
}

export default function TaskItem({ task, index, onChange }: TaskItemProps) {
    const { ref, handleRef } = useSortable({
        id: task.id,
        index,
    })

    return (
        <li
            className={s.item}
            ref={ref}
        >
            <div>
                <CustomCheckbox
                    checked={task.done}
                    onChange={() => onChange(task)}
                />
                <span className={cn(task.done ? s.done : s.notDone)}>
                    {task.name}
                </span>
            </div>
            <span
                ref={handleRef}
                className={s.drag}>
                <DragIcon />
            </span>
        </li>
    )
}
