import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { posts, fetchAsyncGetJson} from "./jsonSlice"

import styled from 'styled-components'


//it's mystery give the width value something effected just fit layout
const JsonMain = styled.div`
  height: 100%;
  width: 250px;
  flex-grow: 1;
  flex-shrink: 1;
  background-color: #8EB8FF;
  padding: 10px 20px;
`

const JsonIndex = () => {

  const _posts = useSelector(posts)
  const dispatch = useDispatch()


  //give seconde argument dispatch the useEffect execute only first mounted
  useEffect(() => {
    //argument async function from JsonSlice.js
    const getJson = async () => {
      await dispatch(fetchAsyncGetJson())
    }
    getJson()

  }, [dispatch])


  const renderList = () => {
    if (_posts.length > 1) {
      return _posts.map((post, index) => {
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
    <JsonMain>
      <p>Json Page | data from https://jsonplaceholder.typicode.com/</p>
      <br />
      {renderList()}
    </JsonMain>
  )
}
export default JsonIndex
