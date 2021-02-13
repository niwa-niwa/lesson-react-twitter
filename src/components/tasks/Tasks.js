import React from "react"
import { FormProvider } from "./FormContext"

import TaskCard from "./TaskCard"
import TaskForm from "./TaskForm"
import useTasks from "./useTasks"

import "./TaskCard.scss"

const Tasks = () => {
  const [tasks] = useTasks([])

  // TODO: show a dialog to input a task

  // TODO: re-rendering after added a new task

  // TODO: draggable task-card

  // rendering tasks in a list
  const renderingList = () => {
    return tasks.map((task) => {
      return <TaskCard initialTask={task} key={task.id} />
    })
  }

  return (
    <FormProvider>
      <div className="task-main">
        <div className="task-list">
          {/*  TODO: have to make new Entry card */}
          {renderingList()}
        </div>
        <TaskForm />
      </div>
    </FormProvider>
  )
}

export default Tasks
