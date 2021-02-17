import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import history from "../history"

import SideNav from "./SideNav"
import Header from "./Header"
import Root from "./Root"
import Footer from "./Footer"
import Settings from "./Settings"
import Json from "./Json"
import Tasks from "./tasks/Tasks"

import { TaskListProvider } from "./tasks/TaskListContext"
import { FormProvider } from "./tasks/FormContext"
import { FlushMessageProvider } from "./FlushMessageContext"

import "../scss/App.scss"

const App = () => {
  return (
    <Router history={history}>
      <FlushMessageProvider>
        <Header />
        <div className="content">
          <div className="content__inner">
            <SideNav />
            <Switch>
              <Route path="/" exact component={Root} />
              <Route path="/settings" exact component={Settings} />
              <Route path="/json" exact component={Json} />
              <TaskListProvider>
                <FormProvider>
                  <Route path="/tasks" exact component={Tasks} />
                </FormProvider>
              </TaskListProvider>
            </Switch>
          </div>
        </div>
        <Footer />
      </FlushMessageProvider>
    </Router>
  )
}

export default App
