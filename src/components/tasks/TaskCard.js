import React,{useState} from 'react'


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
            <span className="status" onClick={() =>clickDone()}>
                {task.done ? '完了' : '未完了'}
            </span>
            <label htmlFor="">
                {task.title}
            </label>
            <span className="star" onClick={() => clickStar()}>
                {task.star ? '星付き' : '星なし'}
            </span>
        </div>
    )
}

export default TaskCard