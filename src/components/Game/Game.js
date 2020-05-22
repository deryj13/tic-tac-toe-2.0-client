import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
import GameBoard from '../GameBoard/GameBoard'

class Game extends Component {
  constructor () {
    super()

    this.state = {
      currentTurn: 1,
      movesPlayed: 0,
      board: ['', '', '', '', '', '', '', '', ''],
      player1: 'x',
      player2: 'o',
      index: null,
      value: null,
      over: false,
      winner: ''
    }
  }

  mark = (event) => {
    console.log(event.target.id)
    console.log(this.state.player1)
    document.getElementById(event.target.id).innerHTML = this.state.player1
  }

  render () {
    return (
      <GameBoard state={this.state} mark={this.mark}/>
    )
  }
}

export default Game
