import React from "react"
import firebase from "firebase/app"
import { FirebaseAuthConsumer } from "@react-firebase/auth"

import { Link } from "react-router-dom"

import "./Header.scss"

import TwitterIcon from "../../img/twitter-icon.png"

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <div className="header__inner">
            <Link to="/">
              <img src={TwitterIcon} alt="" />
            </Link>
            <nav className="header__nav">
              <FirebaseAuthConsumer>
                {({ isSignedIn, user }) => {
                  if (isSignedIn) {
                    return (
                      <div
                        onClick={() => {
                          firebase.auth().signOut()
                        }}
                      >
                        {user.displayName}
                      </div>
                    )
                  } else {
                    return (
                      <div
                        onClick={() => {
                          const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
                          firebase.auth().signInWithPopup(googleAuthProvider)
                        }}
                      >
                        Sign In
                      </div>
                    )
                  }
                }}
              </FirebaseAuthConsumer>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
