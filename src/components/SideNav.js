import React from 'react'
import { Link } from 'react-router-dom'

import '../scss/SideNav.scss'

class SideNav extends React.Component{
    render(){
        return (
            <div className="side-nav">
                <div>メニュー1</div>
                <div>メニュー2</div>
                <div>メニュー3</div>
                <div>メニュー4</div>
                <Link to="/settings">設定</Link>
            </div>
        )
    }
}

export default SideNav
