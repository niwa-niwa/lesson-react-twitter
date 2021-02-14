import React, { useContext } from "react"

import { FormProvider } from "./FormContext"
import { TaskListContext } from "./TaskListContext"

import TaskCard from "./TaskCard"
import TaskForm from "./TaskForm"
import AddNewButton from "./AddNewButton"

import "./TaskCard.scss"

const Tasks = () => {
  const taskListContext = useContext(TaskListContext)

  // TODO: show a dialog to input a task

  // TODO: draggable task-card

  // rendering tasks in a list
  const renderingList = () => {
    return taskListContext.tasks.map((task) => {
      return <TaskCard initialTask={task} key={task.id} />
    })
  }

  return (
    <FormProvider>
      <div className="task-main">
        <div className="task-list">
          <AddNewButton />
          {renderingList()}
        </div>
        <TaskForm />
      </div>
    </FormProvider>
  )
}

export default Tasks
