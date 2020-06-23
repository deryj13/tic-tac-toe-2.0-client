import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import GameBoard from './GameBoard'
import { createGame, showGame, updateGame } from '../../api/game'

class Game extends Component {
  constructor (props) {
    super(props)

    this.state = {
      game: null,
      xIsNext: true,
      over: false,
      show: false,
      newGameCreated: false,
      newGame: null
    }
  }

  showModal = () => this.setState({ show: true })
  hideModal = () => this.setState({ show: false })

  onNewGame = () => {
    const { user, setGame } = this.props
    event.preventDefault()
    createGame(user)
      .then(res => {
        console.log(res)
        setGame(res.data.game)
        this.setState({ newGame: res.data.game })
      })
      .then(() => this.setState({ newGameCreated: true }))
      .catch(console.error)
  }

  board = Array(9).fill('')

  async componentDidMount () {
    const { user, game } = this.props
    if (this.props.game) {
      try {
        const response = await showGame(user, game._id)
        this.setState({ game: response.data.game[0] })
        this.setState({ over: this.state.game.over })
        this.state.game.cells.forEach((value, i) => {
          this.board[i] = value
          document.getElementById(i).innerHTML = value
        })
        const xValues = this.board.filter((i) => i === 'x').length
        const oValues = this.board.filter((i) => i === 'o').length

        if (!this.board.every((i) => i === '')) {
          if (xValues > oValues) {
            this.setState({ xIsNext: false })
          }
        }
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
      const value = this.state.xIsNext ? 'x' : 'o'
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
        .then(() => {
          if (over && this.props.showModal2()) {
            this.props.showModal2()
          }
        })
        .catch(console.error)
    }
  }

  render () {
    if (this.state.newGameCreated) {
      return <Redirect to={`/games/${this.state.newGame._id}`} />
    }
    return (
      <Fragment>
        <GameBoard state={this.state} onClick={this.handleClick}/>
        <Modal
          show={this.state.show}
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
            <h4>Start a New Game!?</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onNewGame}>New Game</Button>
            <Button onClick={this.hideModal} href="#/">Home</Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    )
  }
}

export default withRouter(Game)
