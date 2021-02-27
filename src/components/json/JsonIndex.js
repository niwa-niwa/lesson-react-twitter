import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getPosts } from "../../store/JsonSlice"

import "./JsonIndex.scss"

const JsonIndex = () => {
  const { posts } = useSelector((state) => state.jsonReducer)
  const dispatch = useDispatch()

  //give seconde argument dispatch the useEffect execute only first mounted
  useEffect(() => {
    //argument async function from JsonSlice.js
    dispatch(getPosts())
  }, [dispatch])

  const renderList = () => {
    if (posts.length > 1) {
      return posts.map((post, index) => {
        return (
          <div key={index}>
            <div>{`userID = ${post.userId}`}</div>
            <div>{`title = ${post.title}`}</div>
            <div>{`body = ${post.body}`}</div>
            <br />
          </div>
        )
      })
    } else {
      return <p>nothing is post</p>
    }
  }

  return (
    <div className="json-main">
      <p>Json Page | data from https://jsonplaceholder.typicode.com/</p>
      <br />
      {renderList()}
    </div>
  )
}
export default JsonIndex
