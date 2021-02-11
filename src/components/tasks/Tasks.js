import React from 'react'

import TaskCard from './TaskCard'
import useTasks from './useTasks'

import './TaskCard.scss'


const Tasks = () => {

    const [tasks] = useTasks([])


    // TODO: post a task

    // TODO: show a dialog to input a task
    
    // TODO: rendering tasks in a list
    const renderingList = () => {
        return (
            tasks.map( (task) => {
                return(
                    <TaskCard initialTask={task} key={task.id} />
                )
            })
        )
    }

    return (
        <div className="task-main">
            <div className="task-list">
                {renderingList()}
            </div>
        </div>
    )
}

export default Tasks
