/* eslint-disable*/
const array = [
    [0, 4, 0],
    [4, 2, 0],
    [0, 0, 0]
];
//   console.log(array[0][3]);
//   console.log(array[1][3]);

const n = array.length - 1;

function right() {
//   for(let row = 0; row <= n; row ++){
    // for(let coll = n; coll > 0; coll--){
    //     console.log(array[row][coll], array[row][coll - 1])
    //     if(array[row][coll] === 0 && array[row][coll - 1] == 0 ){
    //         console.log("fuck", [array[row][coll, coll - 1] ]);
            // console.log("fuck", [array[row][coll], array[row][coll - 1]] )

            // [ array[row][coll], array[row][coll - 1] ] = [ array[row][coll -1], array[row][coll] ]
    //     }
    // }
    //   }
    // console.log(">>>>>>>>>>>>>>>>>>>", array[0])

    let row = array[0]
    // for(let i = n; i > 0; i--){
    //     if(row[i] === 0 && row[i-1] > 0){
    //         console.log("fuck", [ row[i], row[i-1] ])
    //         [ row[i], row[i-1] ] = [ row[i-1], row[i] ]
    //     }
    // }
    array[0] = [6,6,6]
    // [row[1], row[2]] = [3,4]
    [row[0], row[1]] = [row[1], row[0]]
    console.log(">>>>>>>>>>>>>>>>>>>", row, row[0], row[1])
}
right();

