import React, { Component } from 'react'

class Game extends Component {
  constructor () {
    super()

    this.state = {
      currentTurn: 1,
      movesPlayed: 0,
      board: ['', '', '', '', '', '', '', '', '']
    }
  }
}

export default Game
