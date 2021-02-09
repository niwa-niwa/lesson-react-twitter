import React from 'react'
import { Link } from 'react-router-dom'

import '../scss/SideNav.scss'

class SideNav extends React.Component{
    render(){
        return (
            <div className="side-nav">
                <div className="side-nav__inner">

                <div>
                    <Link to="/">Twitter</Link>
                </div>
                <div>
                    <Link to="/json">JSON</Link>
                </div>
                <div>
                    <Link to="/tasks">Tasks</Link>
                </div>
                <div>menu7</div>
                <div>
                    <Link to="/settings">Settings</Link>
                </div>
                </div>
            </div>
        )
    }
}

export default SideNav
