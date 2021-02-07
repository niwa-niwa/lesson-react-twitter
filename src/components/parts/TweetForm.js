import React from 'react'

import '../../scss/parts/_TweetForm.scss'

class TweetForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        console.log('handleChange= ',event.target.value)
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        console.log('handleSubmit= ',event.target.value)
        this.setState({value: event.target.value})
    }

    render(){
        return(
            <div className="tweet-form">
                <form className="tweet-form__form" onSubmit={this.handleSubmit}>
                    <textarea placeholder="write your feel" onChange={this.handleChange} />
                    <button type="submit" value="Submit">Tweet</button>
                </form>
            </div>
        )
    }

}

export default TweetForm
