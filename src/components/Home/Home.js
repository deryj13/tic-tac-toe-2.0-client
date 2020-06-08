import React, { Fragment } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const Home = (props) => (
  <Fragment>
    {console.log(props)}
    <Jumbotron className="home-screen col-sm-3 col-md-3 col-lg-3">
      <div className="home-options">
        <Button href="#sign-up"className="btn btn-primary home-buttons">Sign Up!</Button>
        <Button href="#sign-in" className="btn btn-primary home-buttons">Sign In</Button>
        <Button href="#about" className="btn btn-primary home-buttons">About</Button>
        <Button href="#games" className="btn btn-primary home-buttons">New Game</Button>
      </div>
    </Jumbotron>
  </Fragment>
)

export default Home
