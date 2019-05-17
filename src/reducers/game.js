const UPDATE_BOARD = 'UPDATE_BOARD';
const UPDATE_SCORE = 'UPDATE_SCORE';

const initialState = {
  score: 0,
  matrix: [
    [2, 0, 0, 2],
    [0, 0, 2, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
};

export default function reducer(state = initialState, action) {
  if(action.type === UPDATE_BOARD) {
    return [
      ...state,
      action.payload
    ];
  }
  // if(action.type === UPDATE_SCORE) {
  //   return [
  //     ...state,
  //     action.payload
  //   ];
  // }
  return state;
}
