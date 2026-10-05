import s from './Tasks.module.scss'

import MoreIcon from '../../../assets/dashboard/icons/more.svg?react'

import { useState } from 'react';
import { DragDropProvider, type DragEndEvent } from '@dnd-kit/react';
import { tasksMock } from '../../../mocks/tasksMock';
import { move } from '@dnd-kit/helpers';

import DashboardLayout from "../../UI/DashboardLayout/DashboardLayout";
import CustomCheckbox from '../../UI/CustomCheckbox/CustomCheckbox';
import TaskItem from './TaskItem';

import type { TasksType } from '../../../types/mocksTypes';
import ActionButton from '../../UI/BtnDelete/ActionButton';

export default function Tasks() {
    const [isOpen, setIsOpen] = useState(false)
    const [viewTasks, setViewTasks] = useState<TasksType[]>(tasksMock)
    const [checkAllTasks, setCheckAllTasks] = useState(false)

    const handleChangeAll = () => {
        setCheckAllTasks(!checkAllTasks)
        setViewTasks(viewTasks.map(viewTask => ({ ...viewTask, done: !checkAllTasks })))
    }

    const handleChangeItem = (task: TasksType) => {
        setViewTasks(viewTasks.map(viewTask => viewTask.id === task.id ? { ...viewTask, done: !viewTask.done } : viewTask))
    }

    const handleDragEnd = (event: DragEndEvent) => {
        setViewTasks(move(viewTasks, event))
    }

    const deleteCheck = () => {
        setViewTasks(viewTasks.filter(task => !task.done))
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
                <div className={s.actions}>
                    <button className={s.icon}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <MoreIcon />
                    </button>

                    {isOpen && (
                        <ActionButton
                            onClick={deleteCheck}
                            textBtn='Delete selected'
                        />
                    )}
                </div>
            </div>
            <DragDropProvider
                onDragEnd={handleDragEnd}
            >
                <ul className={s.list}>
                    {viewTasks.map((task, index) => (
                        <TaskItem
                            key={task.id}
                            index={index}
                            task={task}
                            onChange={handleChangeItem} />
                    ))}
                </ul>
            </DragDropProvider>
        </DashboardLayout>
    )
}
