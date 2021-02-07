import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import tweetSlice from "./tweetsSlice"


// combine slices that were made createSlice
const reducer = combineReducers({
    tweetsReducer: tweetSlice.reducer,
})

// register reducer to store for Providing App.js
const store = configureStore({ reducer })

export default store
