import React, { Component, Fragment } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

import CreateGame from '../Game/CreateGame'
import GetGames from '../Game/GetGames'

class Home extends Component {
  render () {
    const home = () => (
      <Fragment>
        <Jumbotron className="home-screen col-sm-3 col-md-3 col-lg-3">
          <div className="home-options">
            <Button href="#sign-up"className="btn btn-primary home-buttons">Sign Up!</Button>
            <Button href="#sign-in" className="btn btn-primary home-buttons">Sign In</Button>
            <Button href="#about" className="btn btn-primary home-buttons">About</Button>
          </div>
        </Jumbotron>
      </Fragment>
    )

    const authorizedHome = () => (
      <Fragment>
        <Jumbotron className="home-screen col-sm-3 col-md-3 col-lg-3">
          <div className="home-options">
            <CreateGame user={this.props.user} setGame={this.props.setGame} />
            <GetGames user={this.props.user} setGames={this.props.setGames} />
            <Button href="#about" className="btn btn-primary home-buttons">About</Button>
            <Button href="#sign-out"className="btn btn-primary home-buttons">Sign Out</Button>
          </div>
        </Jumbotron>
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
