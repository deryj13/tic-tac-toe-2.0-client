import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
import GameBoard from './GameBoard'

class Game extends Component {
  constructor () {
    super()

    this.state = {
      xIsNext: true,
      over: false,
      winner: ''
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
    // we need to store the value of the cell to update api
    const value = this.state.xIsNext ? 'x' : 'o'
    // we need to re-assign and store the index to update api
    const index = event.target.id
    console.log('this is the index ' + index)
    // conditional for illegal moves
    if (this.board[event.target.id] !== null || this.state.over) {
      return
    }
    // updating the board with new index/value combos
    this.board[event.target.id] = value
    // actually marking the board
    document.getElementById(event.target.id).innerHTML = value
    // conditional to prevent moves after a game is over
    if (this.checkWinner() || this.checkDraw()) {
      this.setState({ over: true })
      return
    }
    // alternating turns
    this.setState({ xIsNext: !this.state.xIsNext })
  }

  render () {
    console.log(this.props)
    return (
      <GameBoard state={this.state} onClick={this.handleClick}/>
    )
  }
}

export default Game
