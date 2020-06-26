import React, { Fragment } from 'react'
import Row from 'react-bootstrap/Row'

const GameBoard = ({ onClick }) => (
  <Fragment>
    <Row className="game-container">
      <div className="game-background">
        <div className="game-board">
          <div id="0" className='cell cell-0 col-4' onClick={onClick}></div>
          <div id="1" className="cell cell-1 col-4" onClick={onClick}></div>
          <div id="2" className="cell cell-2 col-4" onClick={onClick}></div>
          <div id="3" className="cell cell-3 col-4" onClick={onClick}></div>
          <div id="4" className="cell cell-4 col-4" onClick={onClick}></div>
          <div id="5" className="cell cell-5 col-4" onClick={onClick}></div>
          <div id="6" className="cell cell-6 col-4" onClick={onClick}></div>
          <div id="7" className="cell cell-7 col-4" onClick={onClick}></div>
          <div id="8" className="cell cell-8 col-4" onClick={onClick}></div>
        </div>
      </div>
    </Row>
  </Fragment>
)

export default GameBoard
