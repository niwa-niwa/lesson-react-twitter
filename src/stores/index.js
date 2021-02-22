import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"

import tweetSlice from "./tweetsSlice"
import JsonSlice from "./JsonSlice"

// combine slices that were made createSlice
const reducer = combineReducers({
  tweetsReducer: tweetSlice.reducer,
  jsonReducer: JsonSlice.reducer,
})

// register reducer to store for Providing App.js
const store = configureStore({ reducer })

export default store
