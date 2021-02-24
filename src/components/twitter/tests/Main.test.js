import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import { rest } from "msw"
import { setupServer } from "msw/node"
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import tweetSlice from "../../../stores/tweetsSlice"
import jsonSlice from "../../../stores/JsonSlice"

import Main from '../Main'
// import {store} from '../../../stores'

describe("Tweet-Main-component test cases", () => {

  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        tweetsReducer: tweetSlice.reducer,
        jsonReducer: jsonSlice.reducer
      },
    });
  });

it("1 :render all the elements correctly", async ()=> {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    )

    screen.debug()
  })
})
