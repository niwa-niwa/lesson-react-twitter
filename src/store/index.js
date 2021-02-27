import { configureStore } from "@reduxjs/toolkit"

import tweetReducer from "../components/twitter/tweetSlice"
import jsonReducer from "../components/json/jsonSlice"


export default configureStore({
  reducer:{
    tweet: tweetReducer,
    json: jsonReducer,
  }
})
