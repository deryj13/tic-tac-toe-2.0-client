import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { showGame } from '../../api/game'

class GameIndex extends Component {
  constructor () {
    super()

    this.state = {
      game: null
    }
  }

  onClick = event => {
    const { user, setGame } = this.props
    showGame(user, event.target.id)
      .then((res) => {
        setGame(res.data.game[0])
        this.setState({ game: res.data.game[0] })
      })
      .catch(console.error)
  }

  render () {
    const { games } = this.props

    if (this.state.game) {
      return <Redirect to={`/games/${this.state.game._id}`} />
    }

    return (
      <Fragment>
        {console.log(this.props)}
        <div className="show-games-container col-12">
          <div className='game-history col-xs-4 col-sm-4 col-md-4 col-lg-4'>
            {games.map((games, i) => (
              <Button key={i} id={games._id} onClick={this.onClick} className="game-history-buttons col-3">Game {i}</Button>
            ))}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(GameIndex)
