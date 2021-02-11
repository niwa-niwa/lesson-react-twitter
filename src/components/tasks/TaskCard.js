import React,{useState} from 'react'

import './Tasks.scss'


const TaskCard = ({initialTask}) => {

    const [task, setTask] = useState(initialTask)

    // Change  status done to the task by click
    const clickDone = () => {
        setTask({...task, done:!task.done})
    }

    // Change status star to the task by click
    const clickStar = () => {
        setTask({...task, star:!task.star})
    }

    // create a task-card
    return(
        <div className="task-card" key={task.id}>
            <input className="done" type="checkbox" name="" id="" checked={task.done} onChange={() =>clickDone()} />

            <span className={'title ' + (task.done ? 'strike-line' : '' )} >
                {task.title}
            </span>

            <span className="star" onClick={() => clickStar()}>
                {task.star ? '★' : '☆'}
            </span>
        </div>
    )
}

export default TaskCard