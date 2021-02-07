import React from 'react'


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
                <form onSubmit={this.handleSubmit}>
                    <textarea  cols="30" rows="10" placeholder="write your feel" onChange={this.handleChange} />
                    <button type="submit" value="Submit">Tweet</button>
                </form>
            </div>
        )
    }

}

export default TweetForm
