import { UPDATE_BOARD, UPDATE_SCORE, UPDATE_GAME_STATUS, UPDATE_STEPS_STATUS, NEW_GAME } from './constants';
import { setRandomEmptyCell } from './utils';

export const initialState = {
  score: 0,
  matrix: initMatrix(),
  isFinish: false,
  haveSteps: true
};

function initMatrix() {
  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  return setRandomEmptyCell( setRandomEmptyCell(matrix) );
}

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case NEW_GAME: {
      return {
        ...state,
        matrix: initMatrix(),
        score: 0,
        isFinish: false,
        haveSteps: true
      };
    }
    case UPDATE_BOARD: {
      const { matrix } = action;
      return {
        ...state,
        matrix: matrix
      };
    }
    case UPDATE_SCORE: {
      const { score } = action;
      return {
        ...state,
        score: score
      };
    }
    case UPDATE_GAME_STATUS: {
      const { isFinish } = action;
      return {
        ...state,
        isFinish
      };
    }
    case UPDATE_STEPS_STATUS: {
      const { haveSteps } = action;
      return {
        ...state,
        haveSteps
      };
    }
    default:
      return state;
  }
}
