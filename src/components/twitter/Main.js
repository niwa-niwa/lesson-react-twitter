import React from "react"
import { useSelector } from "react-redux"

import TweetForm from "./TweetForm"

import "./Main.scss"

import Person from "../../img/person-icon.png"

const Main = () => {
  const { tweets } = useSelector((state) => state.tweetsReducer)

  const renderList = () => {
    return tweets.map((tweet) => {
      return (
        <div className="twitter-card" key={tweet.id}>
          <div className="twitter-card__left">
            <img src={Person} alt="" />
          </div>
          <div className="twitter-card__main">
            <div>
              <span className="username">{tweet.user.name}</span>
              <span className="date">{tweet.created_at}</span>
            </div>
            <div>
              <span className="tweet">{tweet.content}</span>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="main">
      <TweetForm />
      {renderList()}
    </div>
  )
}

export default Main
