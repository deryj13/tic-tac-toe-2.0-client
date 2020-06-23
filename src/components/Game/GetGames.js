
import React, { Component, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { indexGame } from '../../api/game'

class GetGames extends Component {
  constructor () {
    super()

    this.state = {
      obtainedGames: false,
      gameID: null
    }
  }

  onGetGames = () => {
    event.preventDefault()
    const { user, setGames } = this.props
    indexGame(user)
      .then(res => {
        setGames(res.data.games)
      })
      .then(() => this.setState({ obtainedGames: true }))
      .catch(console.error)
  }
  render () {
    if (this.state.obtainedGames) {
      return <Redirect to='/game-index' />
    }
    return (
      <Fragment>
        <Button onClick={this.onGetGames} className="btn btn-primary home-buttons">Get Games</Button>
      </Fragment>
    )
  }
}

export default withRouter(GetGames)
