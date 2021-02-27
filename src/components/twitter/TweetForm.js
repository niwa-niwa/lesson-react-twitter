import React, { useState } from "react"
import { useDispatch } from "react-redux"
import firebase from "firebase/app"
import moment from "moment"
import { generateUuid } from "../../modules/generateUuid"

import { fetchAsyncPost } from "./tweetSlice"

import "./TweetForm.scss"


const TweetForm = () => {
  const dispatch = useDispatch()
  const auth = firebase.auth().currentUser
  const [content, setContent] = useState("")


  const handleChange = (event) => {
    setContent(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch(
      fetchAsyncPost(
        {
          "id": generateUuid(),
          "userId": (auth===null) ? 0 : auth.uid,
          "content": content,
          "createdAt": moment().format("YYYY-MM-DD HH:mm:ss"),
          "updateAt": moment().format("YYYY-MM-DD HH:mm:ss")
        }
      )
    )

    setContent("")
  }


  return (
    <div className="tweet-form" data-testid="tweet-form">
      <form className="tweet-form__form" onSubmit={handleSubmit}>
        <textarea
          placeholder="write your feel"
          value={content}
          onChange={handleChange}
          data-testid="tweet-form-textarea"
        />
        <button type="submit" value="Submit" data-testid="tweet-form-submit">
          Tweet
        </button>
      </form>
    </div>
  )
}

export default TweetForm
