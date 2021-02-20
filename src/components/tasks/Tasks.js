import React, { useContext } from "react"
import { DragDropContext, Droppable } from "react-beautiful-dnd"

import { TaskListContext } from "./TaskListContext"

import TaskCard from "./TaskCard"
import TaskForm from "./TaskForm"
import AddNewButton from "./AddNewButton"

import "./TaskCard.scss"

const Tasks = () => {
  const taskListContext = useContext(TaskListContext)

  // TODO: show a dialog to input a task

  // re-sorted task-card
  const reorder = (tasks, startIndex, endIndex) => {
    const result = Array.from(tasks)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }

  // drag function
  function onDragEnd(result) {
    if (!result.destination) {
      return
    }
    if (result.destination.index === result.source.index) {
      return
    }

    const target_tasks = reorder(
      taskListContext.tasks,
      result.source.index,
      result.destination.index
    )

    taskListContext.setTasks([...target_tasks])

    // ToDo: useMemo for not re-render unnecessary task-card
    // ToDo: rebuild data-schema to sorting-number
    // ToDo: add sort-number when post new task
    // ToDo: sort task-card with sort-number in task list page
    // ToDo: send sorting-number to DB when change sort-number with D&D
  }

  // rendering tasks in a list
  const renderingList = () => {
    return taskListContext.tasks.map((task, index) => {
      return <TaskCard initialTask={task} index={index} key={task.id} />
    })
  }

  return (
    <div className="task-main">
      <div className="task-list">
        <AddNewButton />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="taskList">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {renderingList()}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <TaskForm />
    </div>
  )
}

export default Tasks
