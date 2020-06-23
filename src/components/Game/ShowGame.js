import React, { Component, Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import Game from './Game'
import GetGames from './GetGames'

class ShowGame extends Component {
  constructor () {
    super()

    this.state = {
      show2: false
    }
  }

showModal2 = () => this.setState({ show2: true })
hideModal2 = () => this.setState({ show2: false })

render () {
  const { user, game, setGame, setGames } = this.props
  const gameOverOptions = () => (
    <div className="game-over-options col-3">
      <h3>Game Over!</h3>
      <Button href="#/">Home</Button>
    </div>
  )
  return (
    <Fragment>
      <div className="show-game-container col-12">
        <div className="show-game-board">
          {game.over ? gameOverOptions() : ''}
          <Game user={user} game={game} setGame={setGame} showModal2={this.showModal2}/>
          <Modal
            show={this.state.show2}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Game Over!
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Good Game! Go to the homescreen to request a new game.</h4>
            </Modal.Body>
            <Modal.Footer>
              <GetGames user={user} setGames={setGames} onClick={this.hideModal2}/>
              <Button onClick={this.hideModal2} href="#/">Home</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </Fragment>
  )
}
}

export default ShowGame
