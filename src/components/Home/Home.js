import React, { Component, Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'

import CreateGame from '../Game/CreateGame'
import GetGames from '../Game/GetGames'

class Home extends Component {
  render () {
    const home = () => (
      <Fragment>
        <Row className="home-options-row">
          <Jumbotron className="home-options-screen col-xs-8 col-sm-8 col-md-6 col-lg-4">
            <div className="home-options col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <Button href="#sign-up"className="btn btn-dark home-buttons">Sign Up!</Button>
              <Button href="#sign-in" className="btn btn-dark home-buttons">Sign In</Button>
              <Button href="#about" className="btn btn-dark home-buttons">About</Button>
            </div>
          </Jumbotron>
        </Row>
        <Row className="home-welcome-row">
          <div className="home-welcome-content col-xs-12 col-sm-8 col-md-8 col-lg-6">
            <h3 className="space-title">Welcome!</h3>
            <p>
            Tic-Tac-Toe, also known as noughts and crosses is normally a game you play with a friend (or by yourself) on a 3x3 grid made on paper with a pencil. In this rendition, you can play online with your friend right next to you taking turns! Although, the opitmal strategy to aim for a tie has probably already been discovered, it&#39;s still a nice way to pass time and keep you sharp!

            Create an account, sign-in and remember to have fun!
            </p>
          </div>
        </Row>
      </Fragment>
    )

    const authorizedHome = () => (
      <Fragment>
        <Row className="home-options-row">
          <Jumbotron className="home-options-screen col-xs-8 col-sm-8 col-md-6 col-lg-4">
            <div className="home-options col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <CreateGame user={this.props.user} setGame={this.props.setGame} />
              <GetGames user={this.props.user} setGames={this.props.setGames} />
              <Button href="#about" className="btn btn-dark home-buttons">About</Button>
              <Button href="#sign-out"className="btn btn-dark home-buttons">Sign Out</Button>
            </div>
          </Jumbotron>
        </Row>
        <Row className="game-header-row">
          <div className="x-and-zero col-xs-12 col-sm-8 col-md-8 col-lg-6">
          </div>
        </Row>
      </Fragment>
    )
    return (
      <Fragment>
        {this.props.user ? authorizedHome() : home()}
      </Fragment>
    )
  }
}

export default Home
