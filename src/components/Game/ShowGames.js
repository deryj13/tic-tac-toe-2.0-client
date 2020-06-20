import React, { Component, Fragment } from 'react'
import Button from 'react-bootstrap/Button'

import Game from './Game'

class ShowGames extends Component {
  constructor () {
    super()

    this.state = {
      game: null
    }
  }

  render () {
    console.log(this.props)
    return (
      <Fragment>
        <div className="show-games-container">
          <div className="game-history col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {this.props.games.map((games, i) => (
              <Button key={i} id={games._id} className="game-history-buttons col-3">Game {i}</Button>
            ))}
          </div>
          <div className="game-board hidden col-8">
            <Game/>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ShowGames
