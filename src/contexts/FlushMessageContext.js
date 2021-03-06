import React, { createContext, useState, useContext } from "react"
import FlushMessage from "../components/layouts/FlushMessage"

export const FlushMessageContext = createContext()

export const FlushMessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([])

  /**
   *
   * @param {boolean} status | null for initialize
   * @param {content of message} message
   *
   */
  const putMessage = (status, message) => {
    if (status == null) {
      setMessages([])
      return
    }
    setMessages([...messages, { status, message }])
  }

  return (
    <FlushMessageContext.Provider value={{ messages, putMessage }}>
      {children}
      {messages.length ? <FlushMessage /> : null}
    </FlushMessageContext.Provider>
  )
}

export const FlushMessageConsumer = FlushMessageContext.Consumer

export const useFlushMessage = () => useContext(FlushMessageContext)
