import { useState, useEffect } from "react"
import { getTasks } from "../../../apis/TaskApi"

// fetch tasks
const useTasks = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    _getTasks()
  }, [])

  const _getTasks = async () => {
    try {
      const { data } = await getTasks()
      setTasks(data)
    } catch (e) {
      console.log("_getTasks=", e)
      setTasks(null)
    }
  }

  return [tasks, setTasks]
}
export default useTasks
