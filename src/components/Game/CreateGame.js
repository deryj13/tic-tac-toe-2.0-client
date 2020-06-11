
import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { createGame } from '../../api/game'

class CreateGame extends Component {
  constructor () {
    super()
    this.state = {
      cells: null,
      gameID: null,
      over: null
    }
  }
  onCreateGame = () => {
    event.preventDefault()
    const { history, setGame } = this.props
    // console.log(this.props)
    console.log('these are the props ' + this.props)
    createGame(this.props.user)
      .then(res => {
        console.log(res)
        setGame(res.data.game)
      })
      .then(() => history.push('/games'))
      .catch(console.error)
  }
  render () {
    return (
      <Fragment>
        <Button onClick={this.onCreateGame} className="btn btn-primary home-buttons">New Game</Button>
      </Fragment>
    )
  }
}

export default withRouter(CreateGame)
