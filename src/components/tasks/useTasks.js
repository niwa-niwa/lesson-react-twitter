import { useState, useEffect } from "react"
import tasksApi from "../../apis/tasks"

// fetch tasks
const useTasks = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getTasks()
  }, [])

  const getTasks = async () => {
    try {
      const { data } = await tasksApi.get("tasks")
      setTasks(data)
    } catch (e) {
      console.log(e)
    }
  }

  return [tasks, setTasks]
}
export default useTasks
