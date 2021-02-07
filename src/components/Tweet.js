// 未使用


import React from 'react'
import { useSelector } from 'react-redux'
// import { RootState } from '../stores'

const Tweet = () => {
    const tweet = useSelector((state) => state.tweets.tweets)
    console.log(tweet)

    return (
        <div>{tweet}</div>
    )
}

export default Tweet