import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import Cell from '../cell';

const Board = ({ matrix }) => {
  const renderBoard = (matrix) => matrix.map((row, i) =>
    row.map((cell, j) => 
      <Cell key={`${i}-${j}`} number={cell} />
    )
  );

  return (
    <div id='board' className='board-wrapper'>
      {renderBoard(matrix)}
    </div>
  );

};

Board.propTypes = {
  matrix: PropTypes.array.isRequired,
};

export default Board;
