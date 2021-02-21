import React, { useState, useContext } from "react"
import { Draggable } from "react-beautiful-dnd"

import { useFlushMessage } from "../../contexts/FlushMessageContext"
import { FormContext } from "./contexts/FormContext"
import { patchTask } from "../../apis/TaskApi"

import "./Tasks.scss"

const TaskCard = ({ initialTask, index }) => {
  const [task, setTask] = useState(initialTask)
  const formContext = useContext(FormContext)
  const { putMessage } = useFlushMessage()

  // post status of done and star to update database
  const updateStatus = async (value) => {
    try {
      const { data } = await patchTask(value)
      setTask({ ...data })
      putMessage(true, "update status")
    } catch (e) {
      console.log(e)
      putMessage(false, "Something is wrong try again later ")
    }
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

  // create a task-card
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task-card"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
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
      )}
    </Draggable>
  )
}

export default TaskCard
