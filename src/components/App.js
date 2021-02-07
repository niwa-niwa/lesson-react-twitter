import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'

import SideNav from './SideNav'
import Header from './Header'
import Root from './Root'
import Footer from './Footer'
import Settings from './Settings'
import Json from './Json'

import '../scss/App.scss'

const App = () => {
    return (
        <Router history={history}>
            <Header />
                <div className="content">
                    <div className="content__inner">
                        <SideNav />
                        <Switch>
                            <Route path="/" exact component={Root} />
                            <Route path="/settings" exact component={Settings} />
                            <Route path="/json" exact component={Json} />
                        </Switch>
                    </div>
                </div>
            <Footer />
        </Router>
    )
}


export default App
