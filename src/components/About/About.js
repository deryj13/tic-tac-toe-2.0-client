import React, { Component, Fragment } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

class About extends Component {
  render () {
    const noUser = () => (
      <Fragment>
        <Row className="about-container">
          <Jumbotron className="about-screen col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="about">
              <h3 className="space-title">About Tic Tac Toe!</h3>
              <p>
                The year is &#34;21XX&#34;, in which humans coexist with intelligent robots called &#34;Reploids&#34; (replicant androids). Due to their free will, some Reploids are prone to criminal activity and are said to go &#34;Maverick&#34;. A military taskforce called the &#34;Maverick Hunters&#34; is implemented to suppress the uprising of &#34;Mavericks&#34;, Reploids that begin to exhibit dangerous and destructive behavior. This rendition of Tic-Tac-Toe follows two such hunters, Mega Man X and Zero, as they spar with eachother to prepare for the ongoing conflict!
              </p>
              <Button href="#sign-up"className="btn btn-dark home-buttons">Sign Up!</Button>
              <Button href="#sign-in" className="btn btn-dark home-buttons">Sign In</Button>
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

    const withUser = () => (
      <Fragment>
        <Row className="about-container">
          <Jumbotron className="about-screen col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="about">
              <h3 className="space-title">About Tic Tac Toe!</h3>
              <p>
                The year is &#34;21XX&#34;, in which humans coexist with intelligent robots called &#34;Reploids&#34; (replicant androids). Due to their free will, some Reploids are prone to criminal activity and are said to go &#34;Maverick&#34;. A military taskforce called the &#34;Maverick Hunters&#34; is implemented to suppress the uprising of &#34;Mavericks&#34;, Reploids that begin to exhibit dangerous and destructive behavior. This rendition of Tic-Tac-Toe follows two such hunters, Mega Man X and Zero, as they spar with eachother to prepare for the ongoing conflict!
              </p>
              <Button href="#/"className="btn btn-dark home-buttons">Home!</Button>
              <Button href="#sign-out" className="btn btn-dark home-buttons">Sign Out</Button>
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
        { this.props.user ? withUser() : noUser()}
      </Fragment>
    )
  }
}

export default About
