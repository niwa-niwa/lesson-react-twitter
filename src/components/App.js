import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'

import SideNav from './SideNav'
import Header from './Header'
import Main from './Main'
import RightNav from './RightNav'
import Footer from './Footer'
import Settings from './Settings'

import '../scss/App.scss'


const App = () => {
    return (
        <Router history={history}>
            <Header />
                <div className="content">
                    <div className="content__inner">
                        <SideNav />
                        <Switch>
                            <Route path="/" exact >
                                <Main />
                                <RightNav />
                            </Route>
                            <Route path="/settings" exact component={Settings} />
                        </Switch>
                    </div>
                </div>
            <Footer />
        </Router>
    )
}


export default App
