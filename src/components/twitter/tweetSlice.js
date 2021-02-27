import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'


export const BASE_URL = "http://localhost:3001/"
export const ENDPOINT = "tweets/"
export const tweetAxios = axios.create({baseURL:BASE_URL})


export const fetchAsyncGet = createAsyncThunk("tweet/get", async () => {
  const response = await tweetAxios.get(ENDPOINT)
  return response.data
})


export const fetchAsyncPost = createAsyncThunk("tweet/post", async (body) => {
  const response = await tweetAxios.post(ENDPOINT, body)
  return response.data
})


const tweetSlice = createSlice({

  name: "tweet",
  
  initialState: {
    tweets: [
      {
        id: "",
        userId: "",
        content: "",
        createdAt: "",
        updateAt: "",
      },
    ],
  },
  
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
      return{
        ...state,
        tweets: action.payload,
      }
    })
    builder.addCase(fetchAsyncPost.fulfilled, (state, action)=>{
      return{
        ...state,
        tweets: [action.payload, ...state.tweets]
      }
    })
  },

})

export const tweets = (state) => state.tweet.tweets

export default tweetSlice.reducer
