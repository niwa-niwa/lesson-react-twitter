import React from 'react'

import '../scss/Main.scss'

import Person from '../img/person-icon.png'


class Main extends React.Component{

    tweets = [
        {
            "id":"1",
            "content":"初めてのツイート",
            "created_at":"2020-01-31",
            "user":{
                "id":"1",
                "name":"first-user",
                "mail":"abc@example.com",
            },
        },
        {
            "id":"2",
            "content":"2回目のツイート",
            "created_at":"2020-01-31",
            "user":{
                "id":"1",
                "name":"first-user",
                "mail":"abc@example.com",
            },
        },
        {
            "id":"3",
            "content":"3回目のツイート",
            "created_at":"2020-01-31",
            "user":{
                "id":"1",
                "name":"first-user",
                "mail":"abc@example.com",
            },
        },
        {
            "id":"4",
            "content":"4回目のツイート",
            "created_at":"2020-01-31",
            "user":{
                "id":"1",
                "name":"first-user",
                "mail":"abc@example.com",
            },
        },
        {
            "id":"5",
            "content":"5回目のツイート",
            "created_at":"2020-01-31",
            "user":{
                "id":"1",
                "name":"first-user",
                "mail":"abc@example.com",
            },
        },
    ]

    renderList(){
        return this.tweets.map(tweet => {
            return (
                <div className="item" key={tweet.id}>
                    <img src={Person} alt=""/>
                    <span>{tweet.user.name}</span>
                    <span>{tweet.created_at}</span>
                    <span>{tweet.content}</span>
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
