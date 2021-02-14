import React, { createContext } from "react"

import useTasks from "./useTasks"

export const TaskListContext = createContext()

export const TaskListProvider = ({ children }) => {
  const [tasks, setTasks] = useTasks([])

  return (
    <TaskListContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskListContext.Provider>
  )
}

export const TaskListConsumer = TaskListContext.Consumer
