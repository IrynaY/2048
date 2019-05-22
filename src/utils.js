export const WIN_NUMBER = 2048;

const calculateRowShift = array => {
  const row = array.map(() => 0);
  let index = 0;
  let points = 0;
  let haveWon = false;
  array.forEach( value => {
    if(value !== 0){
      if(value === row[index]) {
        row[index] *= 2;
        if(row[index] === WIN_NUMBER)
          haveWon = true;
        points += row[index];
        index++;
      }
      else if(row[index] === 0) {
        row[index] = value;
      }
      else {
        index++;
        row[index] = value;
      }
    }
  });
  return { row, points, haveWon };
};

const rotateMatrix = matrix => matrix.map( (row, i) => row.map( (value, j) => matrix[j][i]));

export const setRandomEmptyCell = matrix => {
  const emptyCells = [];
  matrix.forEach(( row, i ) =>
    row.forEach(( cell, j ) => {
      if(cell === 0)
        emptyCells.push({x: i, y: j});
    })
  );
  if(emptyCells.length > 0) {
    const random = Math.floor(Math.random() * emptyCells.length );
    matrix[ emptyCells[random].x ][ emptyCells[random].y ] = Math.random() < 0.9 ? 2 : 4;
  }
  return matrix;
};

export const haveAvailableStep = matrix => {
  const length = matrix.length;
  for(let i = 0; i < length; i++) {
    for(let j = 0; j < length; j++) {
      if(matrix[i][j] === 0)
        return true;

      if(j+1 < length && i+1 < length) {
        if(matrix[i][j] === matrix[i][j+1] || matrix[i][j] === matrix[i+1][j])
          return true;
      }
      else if(i+1 === length) {
        if(matrix[i][j] === matrix[i][j+1])
          return true;
      }
      else if(j+1 === matrix[i].length) {
        if(matrix[i][j] === matrix[i+1][j])
          return true;
      }
    }
  }
  return false;
};

const calculateLeftShift = matrix => {
  let totalPoints = 0;
  let haveFinish = false;
  let newMatrix = matrix.map( array => {
    const { row, points, haveWon } = calculateRowShift(array);
    if(haveWon)
      haveFinish = haveWon;
    totalPoints += points;
    return row;
  });
  return { newMatrix, totalPoints, haveFinish };
};

const calculateRifhtShift = matrix => {
  let totalPoints = 0;
  let haveFinish = false;
  let newMatrix = matrix.map( array => {
    const { row, points, haveWon } = calculateRowShift([...array].reverse());
    totalPoints += points;
    haveFinish = haveWon;
    return row.reverse();
  });
  return { newMatrix, totalPoints, haveFinish };
};

export const shiftLeft = (matrix, callback) => {
  const { newMatrix, totalPoints, haveFinish } = calculateLeftShift(matrix);
  callback(newMatrix, totalPoints, haveFinish );
};

export const shiftRight = (matrix, callback) => {
  const { newMatrix, totalPoints, haveFinish } = calculateRifhtShift(matrix);
  callback(newMatrix, totalPoints, haveFinish);
};

export const shiftUp = (matrix, callback) => {
  const rotatedMatrix = rotateMatrix([...matrix]);
  const { newMatrix, totalPoints, haveFinish } = calculateLeftShift(rotatedMatrix);
  callback(rotateMatrix(newMatrix), totalPoints, haveFinish);
};

export const shiftDown = (matrix, callback) => {
  const rotatedMatrix = rotateMatrix([...matrix]);
  const { newMatrix, totalPoints, haveFinish } = calculateRifhtShift(rotatedMatrix);
  callback(rotateMatrix(newMatrix), totalPoints, haveFinish);
};
