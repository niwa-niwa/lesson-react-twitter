import React from "react"
import ReactDOM from "react-dom"
import Tasks from "./Tasks"

describe("aaa", () => {
  it("TEST display expected syntax", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Tasks />, div)

    expect(div.innerHTML).toContain("Task page")
    ReactDOM.unmountComponentAtNode(div)
  })
})
