import { useState, useEffect } from "react"
import { getTasks, patchTask } from "../../../apis/TaskApi"

// fetch tasks
const useTasks = () => {
  const [tasks, setTasks] = useState([])


  /**
   * the function is needed to process data before setTasks
   * @param {Tasks} data 
   */
  const putTasks = async (data) => {

    if(data === null){
      /* the case is nothing to any task */
      setTasks(null)
      return
    }
    
    if(tasks.length === 0){
      /* the case is initializing task list */
      setTasks([...data])
      return
    }

    if(tasks.length > 0){
      /* the case is updating task list */

      let _tasks = []
      for(let i = 0; data.length > i; i++){
        if(tasks[i] === undefined || tasks[i].id !== data[i].id ){
          /* update sort_number */
          try{
            data[i].sort_number = i
            await patchTask(data[i])
          }catch(e){
            console.warn(e)
          }
        }
        _tasks.push(data[i])
      }

      setTasks([..._tasks])
      return

    }
  }


  useEffect(() => {

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

    _getTasks()
  
  },[])
  
  
  return [tasks, putTasks]
}


export default useTasks
