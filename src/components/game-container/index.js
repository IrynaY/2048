import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';

import Board from '../board';
import Score from '../score';
import Modal from '../modal';

import { updateScore, updateBoard, resetGame, updateGameStatus, updateStepsStatus } from '../../actions';
import { setRandomEmptyCell, haveAvailableStep, shiftLeft, shiftRight, shiftUp, shiftDown } from '../../utils';

class GameContainer extends React.Component {
  state = {
    showModal: false
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  movementHandler = ( newMatrix, totalPoints, haveFinish ) => {
    const { matrix, score, updateBoard, updateScore, updateGameStatus, updateStepsStatus } = this.props;

    if(JSON.stringify(newMatrix) !== JSON.stringify(matrix)){
      setRandomEmptyCell(newMatrix);
      updateBoard(newMatrix);
      if(totalPoints>0)
        updateScore(totalPoints + score);

      if(haveFinish)
        updateGameStatus(haveFinish);
    }

    if(!haveAvailableStep(newMatrix))
      updateStepsStatus(false);
  }

  onKeyDown = (e) => {
    const { matrix } = this.props;
    switch(e.keyCode) {
      case 37: return shiftLeft(matrix, this.movementHandler);
      case 38: return shiftUp(matrix, this.movementHandler);
      case 39: return shiftRight(matrix, this.movementHandler);
      case 40: return shiftDown(matrix, this.movementHandler);
      default: break;
    }
  }

  closeModal = () => this.setState({ showModal: false })

  render() {
    const { matrix, score, resetGame, haveSteps/*, isFinish */} = this.props;
    return (
      <div id='game'>
        <div className='game-controls'>
          <Score score={score}/>
          <button onClick={resetGame} className='btn'>New game</button>
        </div>

        <Board matrix={matrix}/>

        <Modal isOpen={!haveSteps} title={'GAME OVER'}>
          <button onClick={resetGame} className='btn'>New game</button>
        </Modal>

        <Modal isOpen={this.state.showModal} title={'🎉 YOU WON !!!'}>
          <div className='btn-group'>
            <button onClick={resetGame} className='btn'>New game</button>
            <button onClick={this.closeModal} className='btn'>Continue</button>
          </div>
        </Modal>
      </div>
    );
  }
}

GameContainer.propTypes = {
  matrix: PropTypes.array.isRequired,
  score: PropTypes.number,
  haveSteps: PropTypes.bool,
  resetGame: PropTypes.func,
  updateBoard: PropTypes.func,
  updateScore: PropTypes.func,
  updateGameStatus: PropTypes.func,
  updateStepsStatus: PropTypes.func,
  isFinish: PropTypes.bool
};

GameContainer.defaultProps = {
  score: 0,
  haveSteps: false,
  isFinish: false
};

export default connect(
  ({ score, matrix, haveSteps, isFinish }) => ({ score, matrix, haveSteps, isFinish }),
  {
    updateBoard,
    updateScore,
    resetGame,
    updateGameStatus,
    updateStepsStatus,
  }
)(GameContainer);
