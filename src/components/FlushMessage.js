import React, { useContext, useRef } from "react"

import { FlushMessageContext } from "./FlushMessageContext"

import "../scss/FlushMessage.scss"

const Flush = () => {
  const flushMessageContext = useContext(FlushMessageContext)
  const div_message = useRef(null)

  const stopDisplay = () => {
    if (div_message.current !== null) {
      // add the class for fade out animating
      div_message.current.classList.add("slidOut")

      setTimeout(() => {
        // set null to messages after finishing animating
        flushMessageContext.putMessage(null)
      }, 1700)
    }
  }

  const render = () => {
    // show off message automatically after 5 secondes
    return flushMessageContext.messages.map((message, index) => {
      setTimeout(stopDisplay, 5000)
      return (
        <div
          key={index}
          ref={div_message}
          className={
            "flush-message " + (message.status === true ? "green" : "red")
          }
          onClick={() => {
            stopDisplay()
          }}
        >
          <span>{message.message}</span>
        </div>
      )
    })
  }

  return render()
}
export default Flush
