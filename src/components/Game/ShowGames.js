import React, { Component, Fragment } from 'react'
import Button from 'react-bootstrap/Button'

import Game from './Game'

import { showGame } from '../../api/game'

class ShowGames extends Component {
  constructor () {
    super()

    this.state = {
      game: null
    }
  }

  onClick = event => {
    const { user } = this.props
    showGame(user, event.target.id)
      .then((res) => this.setState({ game: res.data.game[0] }))
      .then(() => {
        this.state.game.cells.forEach((value, i) => {
          document.getElementById(i).innerHTML = value
        })
      })
      .catch(console.error)
  }

  render () {
    const { user } = this.props
    const noGame = () => (
      <Fragment>
        <div className="show-games-container">
          <div className="game-history col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {this.props.games.map((games, i) => (
              <Button key={i} id={games._id} onClick={this.onClick} className="game-history-buttons col-3">Game {i}</Button>
            ))}
          </div>
        </div>
      </Fragment>
    )

    const withGame = () => (
      <Fragment>
        <div className="show-games-container">
          <div className="game-history col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {this.props.games.map((games, i) => (
              <Button key={i} id={games._id} onClick={this.onClick} className="game-history-buttons col-3">Game {i}</Button>
            ))}
          </div>
          <div className="game-board hidden col-8">
            <Game user={user} game={this.state.game}/>
          </div>
        </div>
      </Fragment>
    )
    return (
      <Fragment>
        {this.state.game ? withGame() : noGame() }
      </Fragment>
    )
  }
}

export default ShowGames
