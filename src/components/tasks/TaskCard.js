import React, { useState, useContext } from "react"
import { FormContext } from "./FormContext"

import "./Tasks.scss"

const TaskCard = ({ initialTask }) => {
  const [task, setTask] = useState(initialTask)

  const formContext = useContext(FormContext)

  // Change  status done to the task by click
  const clickDone = () => {
    setTask({ ...task, done: !task.done })
  }

  // Change status star to the task by click
  const clickStar = () => {
    setTask({ ...task, star: !task.star })
  }

  // pass arguments to the form-input at right pain in page
  const clickTitle = (task) => {
    formContext.updateForm(task)
  }

  // create a task-card
  return (
    <div className="task-card" key={task.id}>
      <input
        className="done"
        type="checkbox"
        name=""
        id=""
        checked={task.done}
        onChange={() => clickDone()}
      />

      <span
        className={"title " + (task.done ? "strike-line" : "")}
        onClick={() => clickTitle(task)}
      >
        {task.title}
      </span>

      <span className="star" onClick={() => clickStar()}>
        {task.star ? "★" : "☆"}
      </span>
    </div>
  )
}

export default TaskCard
