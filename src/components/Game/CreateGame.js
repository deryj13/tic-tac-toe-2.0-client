
import React, { Component, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

// import Game from './Game'

import axios from 'axios'
import apiUrl from '../../apiConfig'

class CreateGame extends Component {
  constructor () {
    super()
    this.state = {
      gameID: null
    }
  }
  handleClick = () => {
    event.preventDefault()
    axios({
      method: 'POST',
      url: `${apiUrl}/games`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {}
    })
      .then(res => {
        console.log(res.data.game)
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
        <Button onClick={this.handleClick}>New Game</Button>
      </Fragment>
    )
  }
}

export default withRouter(CreateGame)
