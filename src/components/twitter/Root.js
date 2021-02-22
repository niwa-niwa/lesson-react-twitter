import React from "react"

import Main from "./Main"
import RightNav from "./RightNav"

class Root extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Main />
        <RightNav />
      </React.Fragment>
    )
  }
}

export default Root
