import React, { useState, useContext, useEffect } from "react"

import { FormContext, initial_task } from "./FormContext"
import { useTaskList } from "./TaskListContext"
import { useFlushMessage } from "../FlushMessageContext"

import tasksApi, { deleteTask } from "../../apis/tasks"
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

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!textValidator(formData.title)) {
      putMessage(false, "wrong Text")
      return
    }

    if (formData.id === "") {
      // for new task and add uuid

      const uuid = generateUuid()

      tasksApi
        .post("tasks", { ...formData, id: uuid })
        .then(({ data }) => {
          // initialize formData
          setFormData(initial_task)
          // add new task in taskList
          setTasks([...tasks, data])
          putMessage(true, "Added New Task")
        })
        .catch((e) => {
          console.log(e)
          putMessage(false, "Something is wrong try again later")
        })
    } else {
      // for update task
      tasksApi
        .patch(`/tasks/${formData.id}`, formData)
        .then(({ data }) => {
          setFormData(initial_task)

          //reload task-list forcefully
          const newTask = tasks.map((task) => {
            if (task.id === data.id) {
              return (task = { ...data })
            } else {
              return task
            }
          })
          setTasks([])
          setTasks([...newTask])
        })
        .catch((e) => {
          console.log(e)
          putMessage(false, "Something is wrong try again later")
        })
    }
  }

  const onDelete = () => {
    if (deleteTask(formData.id)) {
      putMessage(true, `Deleted ${formData.title}`)
      const newTask = tasks.filter((task) => {
        return task.id !== formData.id
      })
      setTasks([...newTask])
    } else putMessage(false, "Something is wrong try again late")
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
