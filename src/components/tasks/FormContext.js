import React, { createContext, useState } from "react"

// be called any components
export const FormContext = createContext()

// this valuable wrap elements in JSX
export const FormProvider = ({ children }) => {
  const form_value = {
    id: "",
    title: "",
    star: false,
    description: "",
  }

  const [form, setForm] = useState(form_value)
  const updateForm = (Form) => setForm({ ...Form })

  return (
    <FormContext.Provider value={{ form, updateForm }}>
      {children}
    </FormContext.Provider>
  )
}

// not using for now
export const FormConsumer = FormContext.Consumer
