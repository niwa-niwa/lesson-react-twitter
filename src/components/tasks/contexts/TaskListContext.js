import React, { createContext, useContext } from "react"

import useTasks from "../hooks/useTasks"

export const TaskListContext = createContext()

export const TaskListProvider = ({ children }) => {
  const [tasks, putTasks] = useTasks([])

  return (
    <TaskListContext.Provider value={{ tasks, putTasks }}>
      {children}
    </TaskListContext.Provider>
  )
}

export const TaskListConsumer = TaskListContext.Consumer

export const useTaskList = () => useContext(TaskListContext)
