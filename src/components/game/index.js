import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';

import Board from '../board';
import Score from '../score';

class Game extends React.Component {
  // handleKeyboard = (e) => {
  //   console.log(e)
  // };

  render(){
    const { matrix, score } = this.props;

    return (
      <div id='game'>
        <Score score={score}/>
        <button>undo</button>
        <button>newGame</button>
        <Board matrix={matrix}/>
      </div>
    );
  }
}

export default connect(
  state => ({
    matrix: state.game.matrix,
    score: state.game.score
  }),
  dispatch => ({
    onTest: val => {
      dispatch({type: 'TEST', payload: val});
    }
  })
)(Game);
