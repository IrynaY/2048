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
    console.log(matrix)

    if(JSON.stringify(newMatrix) !== JSON.stringify(matrix)){
      setRandomEmptyCell(newMatrix);
      updateBoard(newMatrix);
      if(totalPoints>0){
        updateScore(totalPoints + score);
      }
      if(haveFinish)
        updateGameStatus(haveFinish);
    }
    if(!haveAvailableStep(newMatrix))
      updateStepsStatus(false);
    console.log(newMatrix)
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

  closeModal = () => this.setState({showModal: false})

  render(){
    const { matrix, score, resetGame, haveSteps, isFinish } = this.props;
    return (
      <div id='game'>
        {/* <div className='game-controls'>
          <Score score={score}/>
          <button onClick={resetGame} className='btn'>New game</button>
        </div> */}

        <Board matrix={matrix}/>

        <Modal isOpen={!haveSteps} title={'GAME OVER'}>
          <p className='lose'></p>
          <button onClick={resetGame} className='btn'>New game</button>
        </Modal>

        <Modal isOpen={this.state.showModal} title={' YOU WON !!!'}>
          <div className='btn-group'>
            <button onClick={resetGame} className='btn'>New game</button>
            <button onClick={this.closeModal} className='btn'>Continue</button>
          </div>
        </Modal>
      </div>
    );
  }
}

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
