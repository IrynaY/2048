import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import Cell from '../cell';

const Board = ({ size }) => {
  // const CELLS_COUNT = size * size;
  const CELL_SIZE_IN_PERCENT = `${100 / size}%`;
  const CELLS = [
    [0, 0, 0, 2],
    [0, 0, 2, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  
  const initBoard = () => {
    return CELLS.map( (row, i) => 
      row.map( (cell, j) => 
        <Cell 
          key={`${i}-${j}`} 
          size={CELL_SIZE_IN_PERCENT} 
          number={cell} 
        />
      )
    );
  };

  return (
    <div className='board-wrapper'>
      {initBoard()}
    </div>
  );
};

Board.propTypes = {
  size: PropTypes.number,
};

Board.defaultProps = {
  size: 4,
};

export default Board;
