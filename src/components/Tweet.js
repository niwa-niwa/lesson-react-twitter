import React from 'react'
import { useDispatch } from 'react-redux'
import { setTweet } from '../stores/tweetsSlice'

const Tweet = () => {
    const dispatch = useDispatch()

    return(
        <div>
            <button onClick={ () => dispatch(setTweet("つぶやきを登録"))}>登録</button>
        </div>

    )
}
export default Tweet