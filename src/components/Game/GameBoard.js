import React, { Fragment } from 'react'

const GameBoard = ({ onClick }) => (
  <Fragment>
    <div className="game-container">
      <div id="0" className="cell col-4" onClick={onClick}></div>
      <div id="1" className="cell col-4" onClick={onClick}></div>
      <div id="2" className="cell col-4" onClick={onClick}></div>
      <div id="3" className="cell col-4" onClick={onClick}></div>
      <div id="4" className="cell col-4" onClick={onClick}></div>
      <div id="5" className="cell col-4" onClick={onClick}></div>
      <div id="6" className="cell col-4" onClick={onClick}></div>
      <div id="7" className="cell col-4" onClick={onClick}></div>
      <div id="8" className="cell col-4" onClick={onClick}></div>
    </div>
  </Fragment>
)

export default GameBoard
