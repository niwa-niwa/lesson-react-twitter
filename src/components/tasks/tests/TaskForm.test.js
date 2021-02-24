import React from "react"
import { render, cleanup, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import tweetSlice from "../../../stores/tweetsSlice"
import jsonSlice from "../../../stores/JsonSlice"

import { TaskListProvider, useTaskList } from "../contexts/TaskListContext"


import TaskForm from "../Tasks"


afterEach(cleanup)

describe("TaskForm", () => {

  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        tweetsReducer: tweetSlice.reducer,
        jsonReducer: jsonSlice.reducer
      },
    });
  });

  it("TaskForm testing input title", async () => {
    const task = {
      id: "",
      title: "",
      star: false,
      description: "",
    }
    const { tasks, setTasks } = useTaskList()

// TODO: implement  context to complete test-code 
    const { getByTestId, findByTestId } = render(
      <Provider store={store}>
        <TaskListProvider>
          <TaskForm initialTask={task} />
        </TaskListProvider>
      </Provider>
    )

    expect(getByTestId("title")).toBeInTheDocument()

    await userEvent.type(getByTestId("title"), "JavaScript")

    expect(await findByTestId("title")).toHaveValue("JavaScript")
  })

  // it("renders TaskForm component", () => {
  //   render(<TaskForm />)

  //   // show HTML source in commandLine
  //   // screen.debug()

  //   // find the String in HTML
  //   screen.getByText(/Title/)

  //   // asserting the String in HTML
  //   expect(screen.getByText("Title:")).toBeInTheDocument()

  //   // Asserting the role
  //   // you can see if roles are exist screen.getByRole('')
  //   expect(screen.getByRole("button")).toBeInTheDocument()

  //   // Asserting an element the String is nothing
  //   expect(screen.queryByText(/Searches for Javascript/)).toBeNull()
  // })
})
