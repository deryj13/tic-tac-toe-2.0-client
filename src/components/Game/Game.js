import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
import GameBoard from './GameBoard'

import { updateGame } from '../../api/game'

class Game extends Component {
  constructor () {
    super()

    this.state = {
      xIsNext: true,
      over: false
    }
  }
  // variable/array to represent board
  board = Array(9).fill(null)

  // helper function to check for winner
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

  // helper function to check for draw
  checkDraw = () => {
    if (this.board.every((i) => i !== null)) {
      return true
    }
  }

  // helper function for marking and updating the board
  handleClick = (event) => {
    // conditional to prevent moves after a game is over
    if (this.state.over) {
      return
    }
    const { user, game } = this.props
    // we need to store the value of the cell to update api
    const value = this.state.xIsNext ? 'x' : 'o'
    // we need to re-assign and store the index to update api
    const index = event.target.id
    // updating the board with new values
    this.board[event.target.id] = value
    // actually marking the board
    document.getElementById(event.target.id).innerHTML = value
    // we need to re-assign and store the 'over' value to update api
    const over = !!(this.checkWinner() || this.checkDraw())
    this.setState({ over: over })
    // alternating turns
    this.setState({ xIsNext: !this.state.xIsNext })
    updateGame(user, game, index, value, over)
      .then(res => console.log(res.data.game))
  }

  render () {
    console.log(this.board)
    return (
      <GameBoard state={this.state} onClick={this.handleClick}/>
    )
  }
}

export default Game
