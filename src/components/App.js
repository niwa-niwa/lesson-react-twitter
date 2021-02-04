import React from 'react'

import SideNav from './SideNav'
import Header from './Header'
import Main from './Main'
import RightNav from './RightNav'


class App extends React.Component{
    render(){
        return (
            <div>
                <div>Appからです</div>
                <Header />
                <SideNav />
                <Main />
                <RightNav />
            </div>
        )
    }
}

export default App
