import React, { Component } from 'react'

import GameBoard from './GameBoard'

import { showGame, updateGame } from '../../api/game'

class Game extends Component {
  constructor () {
    super()

    this.state = {
      game: null,
      xIsNext: true,
      over: false
    }
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
    const { user, game } = this.props
    const value = this.state.xIsNext ? 'x' : 'o'
    const index = event.target.id

    this.board[event.target.id] = value
    document.getElementById(event.target.id).innerHTML = value

    const over = !!(this.checkWinner() || this.checkDraw())
    this.setState({ over: over })

    this.setState({ xIsNext: !this.state.xIsNext })
    updateGame(user, game, index, value, over)
      .catch(console.error)
  }

  render () {
    return (
      <GameBoard state={this.state} onClick={this.handleClick}/>
    )
  }
}

export default Game
