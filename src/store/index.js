// import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"

// import tweetSlice from "./tweetsSlice"
// import JsonSlice from "./JsonSlice"
import tweetReducer from "../components/twitter/tweetSlice"

// combine slices that were made createSlice
export default configureStore({
  reducer:{
    tweet: tweetReducer,
  }
  // jsonReducer: JsonSlice.reducer,
})

// register reducer to store for Providing App.js
// const store = configureStore({ reducer })
