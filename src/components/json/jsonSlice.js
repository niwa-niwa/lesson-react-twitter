import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import json_axios from "../../apis/JsonApi"


export const fetchAsyncGetJson = createAsyncThunk("get/json", async () => {
  const response = await json_axios.get("posts")
  return response.data
})


const jsonSlice = createSlice({
  name: "jsonSlice",
  initialState: {
    posts: [],
  },
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetJson.fulfilled, (state, action)=>{
      return {
        ...state,
        posts:action.payload
      }
    })
  }
  
})


export const posts = (state) => state.json.posts

export default jsonSlice.reducer
