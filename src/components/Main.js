import React from 'react'

import '../scss/Main.scss'
import '../scss/parts/_TwitterCard.scss'

import Person from '../img/person-icon.png'


class Main extends React.Component{

    makeTweets(){
        let tweets = []
        for(let i =1; i<50 ; i++){
            tweets.push({
                "id":i,
                "content":`${i}回目のツイート`,
                "created_at":"2020-01-31",
                "user":{
                    "id":"1",
                    "name":"first-user",
                    "mail":"abc@example.com",
                },
            })
        }
        return tweets
    }

    renderList(){
        return this.makeTweets().map(tweet => {
            return (
                <div className="twitter-card" key={tweet.id}>
                    <div className="twitter-card__left">
                        <img src={Person} alt=""/>
                    </div>
                    <div className="twitter-card__main">
                        <div>
                            <span className="username" >{tweet.user.name}</span>
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

    render(){
        return (
            <div className="main">
                {this.renderList()}
            </div>
        )
    }
}

export default Main
