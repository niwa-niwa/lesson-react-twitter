import React from "react"
import { useSelector } from "react-redux"

import TweetForm from "./TweetForm"

import "./Main.scss"

import Person from "../../img/person-icon.png"


const Main = () => {

  const { tweets } = useSelector((state) => state.tweetsReducer)


  const renderList = () => {
    return tweets.map((tweet, index) => {
      return (
        <div className="twitter-card" key={tweet.id} data-testid={`twitter-card-${index}`}>
          <div className="twitter-card__left">
            <img src={Person} alt="" data-testid={`card-img-${index}`}/>
          </div>
          <div className="twitter-card__main">
            <div>
              <span className="username" data-testid={`card-username-${index}`} >{tweet.user.name}</span>
              <span className="date" data-testid={`card-created_at-${index}`} >{tweet.created_at}</span>
            </div>
            <div>
              <span className="tweet" data-testid={`card-content-${index}`} >{tweet.content}</span>
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
