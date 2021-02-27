import React from 'react'
import { render, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event"
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { FirebaseAuthProvider } from "@react-firebase/auth"
import firebase from "firebase/app"
import "firebase/auth"
import firebase_config from "../../../apis/Firebase"

import tweetReducer, { BASE_URL, ENDPOINT } from "../tweetSlice"
import TweetList from '../TweetList'

import server from "./tweetMock"
import { rest } from "msw"



describe("Tweet-TweetList-component test cases", () => {

  // ready to server
  beforeAll(()=>{
    server.listen()
  })

  beforeEach(() => {

    // ready to redux store
    let store = configureStore({
      reducer: {
        tweet: tweetReducer,
      },
    })

    // ready to routing
    render(
      <Provider store={store}>
        <FirebaseAuthProvider firebase={firebase} {...firebase_config}>
          <TweetList />
        </FirebaseAuthProvider>
      </Provider>
    )
  })

  afterEach(() => {
    server.resetHandlers
    cleanup()
  })

  afterAll(() => {
    server.close()
  })


  it("1 :render all the elements correctly", async () => {
    // display source that is complied js

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
    expect(
      await screen.findByText("sHAh8LFuTqTpmOPU77erhXaAf0s2")
    ).toBeInTheDocument()
    expect(await screen.findByText("2021-02-21 17:16:27")).toBeInTheDocument()
    expect(
      await screen.findByText("This is a mock message")
    ).toBeInTheDocument()
  })


  it("2 :Twitter Form test", async () => {
    const tweet = "test tweet to me"

    // not display new tweet data
    expect(screen.queryByTestId("twitter-card-1")).toBeNull()
    expect(screen.queryByTestId("card-img-1")).toBeNull()
    expect(screen.queryByTestId("card-username-1")).toBeNull()
    expect(screen.queryByTestId("card-created_at-1")).toBeNull()
    expect(screen.queryByTestId("card-content-1")).toBeNull()
    
    // send new tweet 
    expect(screen.getByPlaceholderText("write your feel")).toBeTruthy()
    const inputValue = screen.getByTestId("tweet-form-textarea")
    userEvent.type(inputValue, tweet)
    userEvent.click(screen.getByTestId("tweet-form-submit"))

    // appear new element
    expect(await screen.findByTestId("twitter-card-1")).toBeTruthy()
    expect(screen.getByTestId("card-img-1")).toBeTruthy()
    expect(screen.getByTestId("card-username-1")).toBeTruthy()
    expect(screen.getByTestId("card-created_at-1")).toBeTruthy()
    expect(screen.getByTestId("card-content-1")).toBeTruthy()

    // display new tweet-data
    expect(screen.getByTestId("card-username-0").textContent).toBe("sHAh8LFuTqTpmOPU77erhXaAf0s2")
    expect(screen.getByTestId("card-created_at-0").textContent).toBe("2021-02-27 22:40:38")
    expect(screen.getByTestId("card-content-0").textContent).toBe(tweet)

  })

})
