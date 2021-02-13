import React, { useContext } from "react"
import { FormContext, initial_task } from "./FormContext"

import "./AddNewButton.scss"

const AddNewButton = () => {
  const formContext = useContext(FormContext)

  return (
    <div
      className="btn btn--orange btn--radius"
      onClick={() => {
        formContext.updateForm(initial_task)
      }}
    >
      + Add new task
    </div>
  )
}
export default AddNewButton
