import React from "react"
import { render, cleanup, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import tweetReducer from "../../twitter/tweetSlice"
import jsonSlice from "../../../stores/JsonSlice"

import { TaskListProvider, useTaskList } from "../contexts/TaskListContext"
import { FormProvider, FormContext } from "../contexts/FormContext"
import { FlushMessageProvider, useFlushMessage } from "../../../contexts/FlushMessageContext"

import { FirebaseAuthProvider } from "@react-firebase/auth"
import firebase from "firebase/app"
import "firebase/auth"
import firebase_config from "../../../apis/Firebase"

import Tasks from "../Tasks"


afterEach(cleanup)

describe("aaa", () => {

  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        tweet: tweetReducer,
        jsonReducer: jsonSlice.reducer
      },
    });
  });

  it("TEST display expected syntax", () => {
    render(
      <Provider store={store}>
        <FirebaseAuthProvider firebase={firebase} {...firebase_config}>
          <FlushMessageProvider>
            <TaskListProvider>
              <FormProvider>
                <Tasks />
              </FormProvider>
            </TaskListProvider>
          </FlushMessageProvider>
        </FirebaseAuthProvider>
      </Provider>
    )
    screen.debug()
  })
})
