import React, { createContext, useState } from "react"
import FlushMessage from "./FlushMessage"

export const FlushMessageContext = createContext()

export const FlushMessageProvider = ({ children }) => {
  const [messages, setMessages] = useState(null)

  return (
    <FlushMessageContext.Provider value={{ messages, setMessages }}>
      {children}
      {messages !== null ? <FlushMessage /> : null}
    </FlushMessageContext.Provider>
  )
}

export const FlushMessageConsumer = FlushMessageContext.Consumer
