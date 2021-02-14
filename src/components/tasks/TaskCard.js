import React, { useState, useContext } from "react"
import { FormContext } from "./FormContext"

import tasksApi from "../../apis/tasks"

import "./Tasks.scss"

// TODO accordable and editable card
const TaskCard = ({ initialTask }) => {
  const [task, setTask] = useState(initialTask)

  const formContext = useContext(FormContext)

  // post status of done and star to update database
  const updateStatus = async (value) => {
    tasksApi
      .patch(`tasks/${value.id}`, value)
      .then(({ data }) => {
        console.log(data)
        setTask({ ...data })
        return true
      })
      .catch((e) => {
        console.log(e)
        // TODO: show error-message with flush
        return false
      })
  }

  // Change  status done to the task by click
  const clickDone = () => {
    updateStatus({ ...task, done: !task.done })
  }

  // Change status star to the task by click
  const clickStar = () => {
    updateStatus({ ...task, star: !task.star })
  }

  // pass arguments to the form-input at right pain in page
  const clickTitle = () => {
    formContext.updateForm(task)
  }

  // TODO add a Delete button after done

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
        onClick={() => clickTitle()}
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
