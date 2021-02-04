import React from 'react'

import '../scss/SideNav.scss'

class SideNav extends React.Component{
    render(){
        return (
            <div className="side-nav">
                <div>メニュー1</div>
                <div>メニュー2</div>
                <div>メニュー3</div>
                <div>メニュー4</div>
                <div>メニュー5</div>
            </div>
        )
    }
}

export default SideNav
