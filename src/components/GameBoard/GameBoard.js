import React, { Fragment } from 'react'

const GameBoard = ({ state, mark, x }) => (
  <Fragment>
    <div className="container">
      <div id="game-board" className="game-container">
        <div id="0" className="cell" onClick={mark}></div>
        <div id="1" className="cell" onClick={mark}></div>
        <div id="2" className="cell" onClick={mark}></div>
        <div id="3" className="cell" onClick={mark}></div>
        <div id="4" className="cell" onClick={mark}></div>
        <div id="5" className="cell" onClick={mark}></div>
        <div id="6" className="cell" onClick={mark}></div>
        <div id="7" className="cell" onClick={mark}></div>
        <div id="8" className="cell" onClick={mark}></div>
      </div>
    </div>
  </Fragment>
)

export default GameBoard
