import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

import GameBoard from './GameBoard'
import { showGame, updateGame } from '../../api/game'

class Game extends Component {
  constructor (props) {
    super(props)

    this.state = {
      game: null,
      xIsNext: true,
      isLoading: true,
      over: false,
      show: false
    }
  }

  showModal = () => this.setState({ show: true })
  hideModal = () => {
    this.setState({ show: false, isLoading: true })
  }

  board = Array(9).fill('')

  async componentDidMount () {
    const { user, game } = this.props
    if (this.props.game) {
      try {
        const response = await showGame(user, game._id)
        setTimeout(() => {
          this.setState({
            game: response.data.game[0],
            over: response.data.game[0].over
          })

          this.setState({ isLoading: false })

          if (this.state.game) {
            this.state.game.cells.forEach((value, i) => {
              this.board[i] = value
              if (value === 'X') {
                document.getElementById(i).style.color = '#004ef5'
              } else {
                document.getElementById(i).style.color = '#c71c06'
              }
              document.getElementById(i).innerHTML = value
            })
          }

          const xValues = this.board.filter((i) => i === 'X').length
          const oValues = this.board.filter((i) => i === 'Z').length

          if (!this.board.every((i) => i === '')) {
            if (xValues > oValues) {
              this.setState({ xIsNext: false })
            }
          }
        }, 2000)
      } catch (error) {
        console.error(error)
      }
    }
  }

  checkWinner = () => {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < combos.length; i++) {
      const [a, b, c] = combos[i]
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        return true
      }
    }
  }

  checkDraw = () => {
    if (this.board.every((i) => i !== '')) {
      return true
    }
  }

  handleClick = (event) => {
    if (this.state.over) {
      return
    }

    if (document.getElementById(event.target.id).innerHTML === '') {
      const { user, game } = this.props

      if (this.state.xIsNext) {
        document.getElementById(event.target.id).style.color = '#004ef5'
      } else {
        document.getElementById(event.target.id).style.color = '#c71c06'
      }

      const value = this.state.xIsNext ? 'X' : 'Z'
      const index = event.target.id

      this.board[event.target.id] = value
      document.getElementById(event.target.id).innerHTML = value

      const over = !!(this.checkWinner() || this.checkDraw())
      this.setState({ over: over })

      this.setState({ xIsNext: !this.state.xIsNext })
      updateGame(user, game, index, value, over)
        .then(() => {
          if (over) {
            this.showModal()
          }
        })
        .catch(console.error)
    }
  }

  render () {
    const { game } = this.props

    const gameOverOptions = () => (
      <div className="game-over-options space-title col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <h3>Game Over!</h3>
        <Button className="game-over" href="#/">Home</Button>
      </div>
    )

    if (this.state.isLoading) {
      return (
        <Fragment>
          <Row className="loading-row">
            <h3 className="space-title">... is Loading</h3>
            <div className="zero-ready col-xs-12 col-sm-12 col-md-6 col-lg-6">
            </div>
          </Row>
        </Fragment>
      )
    }

    return (
      <Fragment>
        <Row className="show-game-board">
          {game.over ? gameOverOptions() : ''}
          <GameBoard state={this.state} xIsNext={this.state.xIsNext} onClick={this.handleClick}/>
          <Modal
            show={this.state.show}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header className="game-modal">
              <Modal.Title className="game-modal space-title" id="contained-modal-title-vcenter">
                Game Over!
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="game-modal space-title">
              <h4>Go Back to the Home Screen to start a New Game!?</h4>
            </Modal.Body>
            <Modal.Footer className="game-modal space-title">
              <Button className="modal-buttons" onClick={this.hideModal} href="#/">Home</Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </Fragment>
    )
  }
}

export default withRouter(Game)
