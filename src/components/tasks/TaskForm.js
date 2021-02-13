import React, { useState, useContext, useEffect } from "react"
import { FormContext, initial_task } from "./FormContext"

import tasksApi from "../../apis/tasks"

import "./TaskForm.scss"

// post a task
const TaskForm = () => {
  const formContext = useContext(FormContext)
  const [formData, setFormData] = useState(formContext.form)

  useEffect(() => {
    setFormData(formContext.form)
  }, [formContext.form])

  const handleChange = (event) => {
    if (event.target.id === "star") {
      event.target.value = !event.target.value
    }

    setFormData({ ...formData, [event.target.id]: event.target.value })

    console.log("handleChange in formData= ", formData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (formData.id === "") {
      // for new task and add uuid
      const uuid = generateUuid()

      tasksApi
        .post("tasks", { ...formData, id: uuid })
        .then((response) => {
          // initialize formData
          setFormData(initial_task)
        })
        .catch((e) => {
          console.log(e)
        })
    } else {
      // for update task
      tasksApi
        .patch(`/tasks/${formData.id}`, formData)
        .then((response) => {
          setFormData(initial_task)
        })
        .catch((e) => {
          console.log(e)
        })
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
    </div>
  )
}
export default TaskForm

// made UUID
function generateUuid() {
  // https://github.com/GoogleChrome/chrome-platform-analytics/blob/master/src/internal/identifier.js
  // const FORMAT: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("")
  for (let i = 0, len = chars.length; i < len; i++) {
    switch (chars[i]) {
      case "x":
        chars[i] = Math.floor(Math.random() * 16).toString(16)
        break
      case "y":
        chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16)
        break
      default:
        break
    }
  }
  return chars.join("")
}
