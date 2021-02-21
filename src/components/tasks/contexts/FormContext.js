import React, { createContext, useState } from "react"

// default value to task
export const initial_task = {
  id: "",
  title: "",
  done: false,
  star: false,
  description: "",
}

// be called any components
export const FormContext = createContext()

// this valuable wrap elements in JSX
export const FormProvider = ({ children }) => {
  const [form, setForm] = useState(initial_task)
  const updateForm = (Form) => setForm({ ...Form })

  return (
    <FormContext.Provider value={{ form, updateForm }}>
      {children}
    </FormContext.Provider>
  )
}

// not using for now
export const FormConsumer = FormContext.Consumer
