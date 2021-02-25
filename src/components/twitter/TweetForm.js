import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { setTweet } from "../../stores/tweetsSlice"

import "./TweetForm.scss"


const TweetForm = () => {

  const dispatch = useDispatch()

  const [inputTweet, setInputTweet] = useState("")


  const handleChange = (event) => {
    console.log(event.target.value)
    setInputTweet(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(setTweet(inputTweet))
    setInputTweet("")
  }


  return (
    <div className="tweet-form" data-testid="tweet-form">
      <form className="tweet-form__form" onSubmit={handleSubmit}>
        <textarea
          placeholder="write your feel"
          value={inputTweet}
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
