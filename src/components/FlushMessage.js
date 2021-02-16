import React from "react"

import "../scss/FlushMessage.scss"

const Flush = () => {
  const render = () => {
    return (
      <div className="flush-message green">
        <span>This is message</span>
      </div>
    )
  }

  return render()
}
export default Flush
