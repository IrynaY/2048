import { UPDATE_BOARD, UPDATE_SCORE, NEW_GAME, UPDATE_GAME_STATUS, UPDATE_STEPS_STATUS } from './constants';

export const updateBoard = matrix => ({type: UPDATE_BOARD, matrix});

export const updateScore = score => ({type: UPDATE_SCORE, score});

export const updateGameStatus = isFinish => ({type: UPDATE_GAME_STATUS, isFinish});

export const updateStepsStatus = haveSteps => ({type: UPDATE_STEPS_STATUS, haveSteps});

export const resetGame = () => ({type: NEW_GAME});
