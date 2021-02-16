import React, { createContext, useState, useEffect } from "react"

export const FlushMessageContext = createContext()

export const FlushMessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    console.log("FlushMessage Start")
    // TODO if messages had values it would render "FlushMessage.js"
  }, [messages])

  return (
    <FlushMessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </FlushMessageContext.Provider>
  )
}

export const FlushMessageConsumer = FlushMessageContext.Consumer
