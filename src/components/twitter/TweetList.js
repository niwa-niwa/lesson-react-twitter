import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { tweets, fetchAsyncGet, fetchAsyncDelete } from "./tweetSlice"
import { FirebaseAuthConsumer } from "@react-firebase/auth"

import TweetForm from "./TweetForm"

import "./Main.scss"

import Person from "../../img/person-icon.png"


const TweetList = () => {

  const _tweets = useSelector(tweets)
  const dispatch = useDispatch()


  useEffect(()=>{
    const getTasks = async () => {
      await dispatch(fetchAsyncGet())
    }
    getTasks()
  }, [dispatch])

  const deleteTweet = async (id) => {
    await dispatch(fetchAsyncDelete(id))
    console.log("completed Delete tweet")
  }

  const renderList = () => {
    return _tweets.map((tweet, index) => {
      return (
        <div
          className="twitter-card"
          key={tweet.id}
          data-testid={`twitter-card-${index}`}
        >
          <div className="twitter-card__left">
            <img src={Person} alt="" data-testid={`card-img-${index}`} />
          </div>
          <div className="twitter-card__main">
            <div>
              <span className="username" data-testid={`card-username-${index}`}>
                {tweet.userId}
              </span>
              <span className="date" data-testid={`card-created_at-${index}`}>
                {tweet.createdAt}
              </span>
            </div>
            <div>
              <span className="tweet" data-testid={`card-content-${index}`}>
                {tweet.content}
              </span>
            </div>
          </div>

          <FirebaseAuthConsumer>
            {({ isSignedIn, user }) => {
              if (isSignedIn && user.uid === tweet.userId) {
                return (
                  <button onClick={() => deleteTweet(tweet.id)}>削除</button>
                )
              }
            }}
          </FirebaseAuthConsumer>

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
