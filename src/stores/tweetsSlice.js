import { createSlice } from "@reduxjs/toolkit"


// Test data
// const makeTweets = () => {
//     let tweets = []
//     for(let i =1; i<50 ; i++){
//         tweets.push({
//             "id":i,
//             "content":`${i}回目のツイート`,
//             "created_at":"2020-01-31",
//             "user":{
//                 "id":"1",
//                 "name":"first-user",
//                 "mail":"abc@example.com",
//             },
//         })
//     }
//     return tweets
// }


// initial state variables
const initialState = {
    tweets:[
        {
            "id":1,
            "content":`1回目のツイート`,
            "created_at":"2020-01-31",
            "user":{
                "id":"1",
                "name":"first-user",
                "mail":"abc@example.com",
            }
        }
    ]
    // tweets:[...makeTweets()]
}


// bind state, action, as a reducer
const slice = createSlice({
    name: "tweetsSlice", // name of slice for register in stores/index.js
    initialState, // set variables for initialize
    reducers: { // register actions in reducers
        setTweet: (state, action) => {
            let tweet = {
                "id":state.tweets.length+2,
                "content":action.payload,
                "created_at":"2020-01-31",
                "user":{
                    "id":"1",
                    "name":"first-user",
                    "mail":"abc@example.com",
                },
            }
            state.tweets = [...state.tweets, tweet]
        }
    }
})


export const { setTweet } = slice.actions

export default slice
