const initialState = [
  [2, 0, 0, 2],
  [0, 0, 2, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

export default function reducer(state = initialState, action) {
  if(action.type === 'TEST') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}
// const initialState = [
//   'aaa',
//   'bbb'
// ]

// export default function reducer(state = initialState, action){
// if(action.type === 'ADD_TRACK'){
//   return [
//     ...state,
//     action.payload
//   ]
// }

// // delete
// // update 
// // and other track actions
// return state;
// }