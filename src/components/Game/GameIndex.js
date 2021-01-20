import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

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
        setGame(res.data.game)
        this.setState({ game: res.data.game })
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
        <Row className="show-games-container">
          <div className="show-games-title">
            <h3 className="space-title">History of Games:</h3>
          </div>
          <div className='game-history col-xs-4 col-sm-8 col-md-12 col-lg-12'>
            {games.map((games, i) => (
              <Button key={i} id={games._id} onClick={this.onClick} className="btn game-buttons col-2">Game {i}</Button>
            ))}
          </div>
        </Row>
        <Row className="game-header-row">
          <div className="x-and-zero col-xs-12 col-sm-8 col-md-8 col-lg-6">
          </div>
        </Row>
        <Row className="game-index-footer">
          <div className="game-index-options col-xs-6 col-sm-8 col-md-8 col-lg-12">
            <Button className="game-buttons col-2" href="#/">Home</Button>
            <Button className="game-buttons col-2" href="#sign-out">Sign Out</Button>
          </div>
        </Row>
      </Fragment>
    )
  }
}

export default withRouter(GameIndex)
