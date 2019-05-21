import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import Cell from '../cell';

class Board extends React.Component {
  renderBoard = matrix => matrix.map((row, i) =>
    row.map((cell, j) => 
      <Cell key={`${i}-${j}`} number={cell} />
    )
  );

  render() {
    const { matrix } = this.props;
    return (
      <div id='board' className='board-wrapper'>
        {this.renderBoard(matrix)}
      </div>
    );
  }
}

Board.propTypes = {
  matrix: PropTypes.array.isRequired,
};

export default Board;
