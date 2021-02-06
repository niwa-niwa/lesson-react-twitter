import React from 'react'
import { Link } from 'react-router-dom'

import '../scss/Header.scss'

import TwitterIcon from '../img/twitter-icon.png'

class Header extends React.Component{
    render(){
        return (
            <header className="header">
                <div className="header__wrapper">
                    <div className="header__inner">
                        <Link to="/">
                            <img src={TwitterIcon} alt=""/>
                        </Link>

                        <nav className="header__nav">
                            <div>menu1</div>
                            <div>menu2</div>
                            <div>menu3</div>
                        </nav>

                        <nav className="header__hamburger">
                            <div>三</div>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
