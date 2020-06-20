
import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { createGame } from '../../api/game'

class CreateGame extends Component {
  constructor () {
    super()
    this.state = {
      created: false
    }
  }
  onCreateGame = () => {
    event.preventDefault()
    const { history, setGame } = this.props
    createGame(this.props.user)
      .then(res => {
        setGame(res.data.game)
      })
      .then(() => this.setState({ created: true }))
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
