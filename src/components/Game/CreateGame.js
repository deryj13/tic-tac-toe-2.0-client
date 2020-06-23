
import React, { Component, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { createGame } from '../../api/game'

class CreateGame extends Component {
  constructor () {
    super()
    this.state = {
      created: false,
      gameID: null
    }
  }

  onCreateGame = () => {
    event.preventDefault()
    const { setGame } = this.props
    createGame(this.props.user)
      .then(res => {
        setGame(res.data.game)
        this.setState({ gameID: res.data.game._id })
      })
      .then(() => this.setState({ created: true }))
      .catch(console.error)
  }
  render () {
    if (this.state.created) {
      return <Redirect to={'/games'} />
    }
    return (
      <Fragment>
        <Button onClick={this.onCreateGame} className="btn btn-primary home-buttons">New Game</Button>
      </Fragment>
    )
  }
}

export default withRouter(CreateGame)
