import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import Cell from '../cell';

const Board = ({ size }) => {
  const CELLS_COUNT = size * size;
  const CELL_SIZE_IN_PERCENT = `${100 / size}%`;
  const CELLS = [];

  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const initBoard = () => {
    let firstNum = getRandomNum(1, CELLS_COUNT + 1);
    let secondNum = getRandomNum(1, CELLS_COUNT + 1);

    while (firstNum === secondNum) {
      secondNum = getRandomNum(1, CELLS_COUNT + 1);
    }

    for(let i = 1; i <= CELLS_COUNT; i++) {
      CELLS.push(
        <Cell key={i} size={CELL_SIZE_IN_PERCENT} number={[firstNum, secondNum].includes(i) ? 2 : 0} />
      );
    }
    return CELLS;
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
