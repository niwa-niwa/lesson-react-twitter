import { useState, useEffect } from "react"
import { getTasks, patchTask } from "../../../apis/TaskApi"

// fetch tasks
const useTasks = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    _getTasks()
  }, [])

  const _getTasks = async () => {

    try {
      const { data } = await getTasks()
      const _tasks = data.sort((a, b)=>{
        if(a.sort_number > b.sort_number){
          return 1
        }else{
          return -1
        }
      })
      putTasks(_tasks)

    } catch (e) {
      console.log("_getTasks=", e)
      putTasks(null)

    }
  }

  const putTasks = (data) => {
    /* sorting */
    console.log('putTasks')

    if(data === null){
      /* error */
      setTasks(null)
      return

    }
    
    if(tasks.length === 0){
      setTasks([...data])
      return

    }

    if(tasks.length > 0){
      /* confirm sort_number */
      let _tasks = []
      for(let i = 0; data.length > i; i++){
        
        if(data[i].id !== tasks[i].id){
          /* update sort_number */
          console.warn('difference sort_number')
          data[i].sort_number = i
          //TODO: update sort_number with axios's patchTask
          //TODO: after this function was complete replace setTasks with putTasks

        }
        _tasks.push(data[i])
      }
      // console.log(data[0])
      setTasks([..._tasks])
      return

    }
    
  }

  return [tasks, setTasks]
}
export default useTasks
