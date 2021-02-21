import React from "react"
import { DragDropContext, Droppable } from "react-beautiful-dnd"

import { useTaskList } from "./contexts/TaskListContext"
import TaskCard from "./TaskCard"
import TaskForm from "./TaskForm"
import AddNewButton from "./AddNewButton"

import "./TaskCard.scss"

const Tasks = () => {
  const { tasks, setTasks } = useTaskList()

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
      tasks,
      result.source.index,
      result.destination.index
    )

    setTasks([...target_tasks])
  }

  // rendering tasks in a list
  const renderingList = () => {
    if (tasks === null) {
      // when can connect the internet
      return <div>Something is wrong try again late</div>
    }
    if (tasks.length === 0) {
      // task is 0
      return <div>Task is nothing</div>
    }

    return tasks.map((task, index) => {
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
