import React, { useContext, useRef } from "react"

import { FlushMessageContext } from "./FlushMessageContext"

import "../scss/FlushMessage.scss"

const Flush = () => {
  const flushMessageContext = useContext(FlushMessageContext)
  const div_message = useRef(null)

  const stopDisplay = () => {
    if (div_message.current !== null) {
      console.log(div_message.current.classList)
      // add the class for fade out animating
      div_message.current.classList.add("slidOut")

      setTimeout(() => {
        // set null to messages after finishing animating
        setTimeout(flushMessageContext.setMessages(null), 1700)
      }, 3000)
    }
  }

  // TODO change style when result success or error

  const render = () => {
    // show off message automatically after 5 secondes
    setTimeout(stopDisplay, 5000)
    return (
      <div
        ref={div_message}
        className="flush-message green"
        onClick={() => {
          stopDisplay()
        }}
      >
        <span>{flushMessageContext.messages}</span>
      </div>
    )
  }

  return render()
}
export default Flush
