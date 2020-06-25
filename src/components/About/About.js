import React, { Component, Fragment } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

class About extends Component {
  render () {
    const noUser = () => (
      <Fragment>
        <Jumbotron className="about-screen col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="about">
            <h3>About Tic Tac Toe!</h3>
            <p>
              Tic-Tac-Toe, also known as noughts and crosses is normally a game you play with a friend (or by yourself) on a 3x3 grid made on paper with a pencil. In this rendition, you can play online with your friend right next to you taking turns! Although, the opitmal strategy to aim for a tie has probably already been discovered, it&#39;s still a nice way to pass time and keep you sharp!

              Create an account, sign-in and remember to have fun!
            </p>
            <Button href="#sign-up"className="btn btn-primary home-buttons">Sign Up!</Button>
            <Button href="#sign-in" className="btn btn-primary home-buttons">Sign In</Button>
          </div>
        </Jumbotron>
      </Fragment>
    )

    const withUser = () => (
      <Fragment>
        <Jumbotron className="about-screen col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="about">
            <h3>About Tic Tac Toe!</h3>
            <p>
              Tic-Tac-Toe, also known as noughts and crosses is normally a game you play with a friend (or by yourself) on a 3x3 grid made on paper with a pencil. In this rendition, you can play online with your friend right next to you taking turns! Although, the opitmal strategy to aim for a tie has probably already been discovered, it&#39;s still a nice way to pass time and keep you sharp!
            </p>
            <Button href="#/"className="btn btn-primary home-buttons">Home!</Button>
            <Button href="#sign-out" className="btn btn-primary home-buttons">Sign Out</Button>
          </div>
        </Jumbotron>
      </Fragment>
    )

    return (
      <Fragment>
        { this.props.user ? withUser() : noUser()}
      </Fragment>
    )
  }
}

export default About
