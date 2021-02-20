import React, { useState, useContext, useEffect } from "react"

import _ from "lodash"
import { generateUuid } from "../../modules/generateUuid"

import { FormContext, initial_task } from "./FormContext"
import { TaskListContext } from "./TaskListContext"
import { useFlushMessage } from "../FlushMessageContext"

import tasksApi from "../../apis/tasks"
import { textValidator } from "../../modules/Validators"

import "./TaskForm.scss"

// post a task
const TaskForm = () => {
  const formContext = useContext(FormContext)
  const taskListContext = useContext(TaskListContext)
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
          taskListContext.setTasks([...taskListContext.tasks, data])
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
          forceReload(data)
        })
        .catch((e) => {
          console.log(e)
          putMessage(false, "Something is wrong try again later")
        })
    }
  }

  // re-rendering task-list forcefully
  const forceReload = (data) => {
    const list = [...taskListContext.tasks]
    const index = _.findIndex(taskListContext.tasks, { id: data.id })
    list.splice(index, 1, data)
    taskListContext.setTasks([])
    taskListContext.setTasks([...list])
  }

  // TODO made validation

  // this is for test
  const onUseRef = () => {
    putMessage(false, "message from flushMessageContext")
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
      {/* This is for test */}
      <br />
      <button onClick={onUseRef}>useRef</button>
    </div>
  )
}
export default TaskForm
