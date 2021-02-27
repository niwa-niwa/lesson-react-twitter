import { createSlice } from "@reduxjs/toolkit"
import json_axios from "../apis/JsonApi"

const initialState = {
  posts: [],
}

const slice = createSlice({
  name: "JsonSlice",
  initialState,
  reducers: {
    setListItems: (state, action) => {
      state.posts = [...action.payload, state.posts]
    },
  },
})

export const { setListItems } = slice.actions

export default slice

// implemented Async function and a component call this with dispatch in Json.js
export function getPosts() {
  return async function (dispatch) {
    try {
      const response = await json_axios.get("posts")
      dispatch(setListItems(response.data))
    } catch (e) {
      console.log(e)
    }
  }
}
