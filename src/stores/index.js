import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import tweetSlice from "./tweetsSlice"
import jsonSlice from './jsonSlice'


// combine slices that were made createSlice
const reducer = combineReducers({
    tweetsReducer: tweetSlice.reducer,
    jsonReducer: jsonSlice.reducer,
})

// register reducer to store for Providing App.js
const store = configureStore({ reducer })

export default store
