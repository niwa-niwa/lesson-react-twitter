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

describe("Tweet-Main-component test cases", () => {

  let store;
  beforeEach(() => {

    // ready to redux store
    store = configureStore({
      reducer: {
        tweetsReducer: tweetSlice.reducer,
        jsonReducer: jsonSlice.reducer
      },
    });

    // ready to routing
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    )
  });


it("1 :render all the elements correctly",  ()=> {
    
    // display source that is complied js
    // screen.debug()

    // Twitter-form test
    expect(screen.getByTestId("tweet-form")).toBeTruthy()
    expect(screen.getByTestId("tweet-form-textarea")).toBeTruthy()
    expect(screen.getByTestId("tweet-form-submit")).toBeTruthy()
    
    // Twitter-card test
    expect(screen.getByTestId("twitter-card-0")).toBeTruthy()
    expect(screen.getByTestId("card-img-0")).toBeTruthy()
    expect(screen.getByTestId("card-username-0")).toBeTruthy()
    expect(screen.getByTestId("card-created_at-0")).toBeTruthy()
    expect(screen.getByTestId("card-content-0")).toBeTruthy()
    
    // Twitter-card test to have text
    expect(screen.getByText("first-user")).toBeTruthy()
    expect(screen.getByText("2020-01-31")).toBeTruthy()
    expect(screen.getByText("1回目のツイート")).toBeTruthy()
  })

})
