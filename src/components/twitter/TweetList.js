import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { tweets, fetchAsyncGet } from "./tweetSlice"

import TweetForm from "./TweetForm"

import "./Main.scss"

import Person from "../../img/person-icon.png"


const TweetList = () => {

  const _tweets = useSelector(tweets)
  const dispatch = useDispatch()


  useEffect(()=>{
    const getTasks = async ()=>{
      await dispatch(fetchAsyncGet())
    }
    getTasks()
  }, [dispatch])


  const renderList = () => {
    return _tweets.map((tweet, index) => {
      return (
        <div className="twitter-card" key={tweet.id} data-testid={`twitter-card-${index}`}>
          <div className="twitter-card__left">
            <img src={Person} alt="" data-testid={`card-img-${index}`}/>
          </div>
          <div className="twitter-card__main">
            <div>
              <span className="username" data-testid={`card-username-${index}`} >{tweet.userId}</span>
              <span className="date" data-testid={`card-created_at-${index}`} >{tweet.createdAt}</span>
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

export default TweetList
