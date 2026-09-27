import s from './Tasks.module.scss'

import MoreIcon from '../../../assets/dashboard/icons/more.svg?react'
import DragIcon from '../../../assets/dashboard/icons/dragIcon.svg?react'

import cn from 'classnames'
import { useState } from 'react';

import DashboardLayout from "../../UI/DashboardLayout/DashboardLayout";
import CustomCheckbox from '../../UI/CustomCheckbox/CustomCheckbox';
import { tasksMock } from '../../../mocks/tasksMock';

import type { TasksType } from '../../../types/mocksTypes';
import { DragDropProvider } from '@dnd-kit/react';

export default function Tasks() {
    const [viewTasks, setViewTasks] = useState<TasksType[]>(tasksMock)
    const [checkAllTasks, setCheckAllTasks] = useState(false)

    const handleChangeAll = () => {
        setCheckAllTasks(!checkAllTasks)
        setViewTasks(viewTasks.map(viewTask => ({ ...viewTask, done: !checkAllTasks })))
    }

    return (
        <DashboardLayout>
            <div className={s.header}>
                <div className={s.title}>
                    <CustomCheckbox
                        checked={checkAllTasks}
                        onChange={handleChangeAll}
                    />
                    <h3>Tasks</h3>
                </div>
                <button
                    className={s.icon}
                >
                    <MoreIcon />
                </button>
            </div>
            <DragDropProvider>
                <ul className={s.list}>
                    {viewTasks.map(task => (
                        <li key={task.id} className={s.item}>
                            <div>
                                <CustomCheckbox
                                    checked={task.done}
                                    onChange={() => setViewTasks(viewTasks.map(viewTask => viewTask.id === task.id ? { ...viewTask, done: !viewTask.done } : viewTask))}
                                />
                                <span className={cn(task.done ? s.done : s.notDone)}>
                                    {task.name}
                                </span>
                            </div>
                            <span className={s.drag}>
                                <DragIcon />
                            </span>
                        </li>
                    ))}
                </ul>
            </DragDropProvider>
        </DashboardLayout>
    )
}
