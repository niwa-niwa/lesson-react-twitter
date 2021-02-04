import React from 'react'

import SideNav from './SideNav'
import Header from './Header'
import Main from './Main'
import RightNav from './RightNav'
import Footer from './Footer'

import '../scss/App.scss'


class App extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <SideNav />
                <Main />
                <RightNav />
                <Footer />
            </div>
        )
    }
}

export default App
