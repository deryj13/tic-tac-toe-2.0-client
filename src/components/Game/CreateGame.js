
import React, { Component, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { createGame } from '../../api/game'
// import Game from './Game'

// import axios from 'axios'
// import apiUrl from '../../apiConfig'

class CreateGame extends Component {
  constructor () {
    super()
    this.state = {
      gameID: null
    }
  }
  onCreateGame = () => {
    event.preventDefault()
    createGame(this.props)
      .then(res => {
        this.setState({ gameID: res.data.game._id })
      })
      .catch(console.error)
  }

  render () {
    if (this.state.gameID) {
      return <Redirect to='/games'/>
    }
    return (
      <Fragment>
        <Button onClick={this.onCreateGame}>New Game</Button>
      </Fragment>
    )
  }
}

export default withRouter(CreateGame)
