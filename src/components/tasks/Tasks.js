import React,{ useState, useEffect } from 'react'

import TaskCard from './TaskCard'


const Tasks = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks([
            ...[
                {
                    "id":"aaaa1111",
                    "title":"task 1",
                    "done":false,
                    "star":false
                },
                {
                    "id":"bbb1111",
                    "title":"task 2",
                    "done":false,
                    "star":false
                }
            ]
        ])
    }, [])

    // TODO: post a task

    // TODO: show a dialog to input a task
    
    // TODO: fetch tasks

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
            {renderingList()}
        </div>
    )
}

export default Tasks
