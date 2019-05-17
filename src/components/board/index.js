import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import Cell from '../cell';

class Board extends React.Component {

  initBoard = (matrix) => {
    return matrix.map( (row, i) =>
      row.map( (cell, j) =>
        <Cell
          key={`${i}-${j}`}
          number={cell}
        />
      )
    );
  };

  handleKeyboard = (e) => {
    console.log("++++++++++++")
    // 37-40
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyboard);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyboard);
  }
  render() {
    const { matrix } = this.props;
    return (
      <div className='board-wrapper'>
        {this.initBoard(matrix)}
      </div>
    );
  }
}

Board.propTypes = {
  matrix: PropTypes.array,
};

// Board.defaultProps = {
//   size: 4,
// };

export default Board;
