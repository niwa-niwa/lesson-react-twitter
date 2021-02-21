import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import history from "../history"

import SideNav from "./layouts/SideNav"
import Header from "./layouts/Header"
import Root from "./twitter/Root"
import Footer from "./layouts/Footer"
import Settings from "./settings/Settings"
import JsonIndex from "./json/JsonIndex"
import Tasks from "./tasks/Tasks"

import { TaskListProvider } from "./tasks/contexts/TaskListContext"
import { FormProvider } from "./tasks/contexts/FormContext"
import { FlushMessageProvider } from "../contexts/FlushMessageContext"

import "./App.scss"

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
              <Route path="/json" exact component={JsonIndex} />
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
