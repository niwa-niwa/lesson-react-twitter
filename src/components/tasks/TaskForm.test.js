import React from "react"
import { render, cleanup, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

import TaskForm from "./Tasks"

afterEach(cleanup)

describe("TaskForm", () => {
  it("TaskForm testing input title", async () => {
    const task = {
      id: "",
      title: "",
      star: false,
      description: "",
    }

    const { getByTestId, findByTestId } = render(
      <TaskForm initialTask={task} />
    )

    expect(getByTestId("title")).toBeInTheDocument()

    await userEvent.type(getByTestId("title"), "JavaScript")

    expect(await findByTestId("title")).toHaveValue("JavaScript")
  })

  it("renders TaskForm component", () => {
    render(<TaskForm />)

    // show HTML source in commandLine
    // screen.debug()

    // find the String in HTML
    screen.getByText(/Title/)

    // asserting the String in HTML
    expect(screen.getByText("Title:")).toBeInTheDocument()

    // Asserting the role
    // you can see if roles are exist screen.getByRole('')
    expect(screen.getByRole("button")).toBeInTheDocument()

    // Asserting an element the String is nothing
    expect(screen.queryByText(/Searches for Javascript/)).toBeNull()
  })
})
