import React, { useState, useContext, useEffect } from "react"

import { FormContext, initial_task } from "./FormContext"
import { useTaskList } from "./TaskListContext"
import { useFlushMessage } from "../FlushMessageContext"

import { postNewTask, patchTask, deleteTask } from "../../apis/TaskApi"
import { textValidator } from "../../modules/Validators"
import { generateUuid } from "../../modules/generateUuid"

import "./TaskForm.scss"
import "../../scss/helpers.scss"

// post a task
const TaskForm = () => {
  const formContext = useContext(FormContext)
  const { tasks, setTasks } = useTaskList()
  const { putMessage } = useFlushMessage()
  const [formData, setFormData] = useState(formContext.form)

  useEffect(() => {
    setFormData(formContext.form)
  }, [formContext.form])

  const handleChange = (event) => {
    if (event.target.id === "star") {
      event.target.value = !event.target.value
    }
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // reject it if the title is nothing
    if (!textValidator(formData.title)) {
      putMessage(false, "wrong Text")
      return
    }

    // the if-syntax decide new task or update task
    if (formData.id === "") {
      // for new task and add uuid
      const uuid = generateUuid()

      try {
        const { data } = await postNewTask(formData, uuid)
        setTasks([...tasks, data]) // add new task in taskList
        setFormData(initial_task)
        putMessage(true, "Added New Task")
      } catch (e) {
        console.error("handleSubmit-newTask=", e)
        putMessage(false, "Something is wrong try again later")
      }
    } else {
      // for update task
      try {
        const { data } = await patchTask(formData)
        setFormData(initial_task)
        const newTask = tasks.map((task) => {
          if (task.id === data.id) {
            return (task = { ...data })
          } else {
            return task
          }
        })
        setTasks([])
        setTasks([...newTask]) //reload task-list forcefully
        putMessage(true, "Edited the task")
      } catch (e) {
        console.error("handleSubmit-patchTask=", e)
        putMessage(false, "Something is wrong try again later")
      }
    }
  }

  const onDelete = async () => {
    try {
      await deleteTask(formData.id)
      putMessage(true, `Deleted ${formData.title}`)
      const newTask = tasks.filter((task) => {
        return task.id !== formData.id
      })
      setTasks([...newTask])
      setFormData(initial_task)
    } catch (e) {
      console.error("onDelete=", e)
      putMessage(false, "Something is wrong try again late")
    }
  }

  return (
    <div className="task-form-wrap">
      <form className="task-form" autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            data-testid="title"
            id="title"
            type="text"
            onChange={handleChange}
            value={formData.title}
          />
        </label>

        <span id="star" onClick={handleChange}>
          {formData.star ? "★" : "☆"}
        </span>

        <br />
        <label data-testid="description" htmlFor="">
          Description <br />
          <textarea
            id="description"
            onChange={handleChange}
            value={formData.description}
          ></textarea>
        </label>

        <br />
        <button type="submit" value="Submit">
          Add
        </button>
      </form>
      <br />
      <button
        className={formData.id === "" ? "display-none" : ""}
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  )
}
export default TaskForm
