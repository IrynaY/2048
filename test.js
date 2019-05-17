/* eslint-disable*/
const array = [
    [2, 0, 0, 0],
    [0, 8, 2, 0],
    [2, 0, 0, 0],
    [4, 8, 8, 16],
]; const n = array.length - 1;

function right() {
  for(let row = 0; row <= n; row++){
    for(let coll = array[row].length-1; coll > 0; coll--){

        if(array[row][coll] > 0){
            let s = coll - 1
            while(array[row][s] == 0){
                s--
            }
            if(array[row][coll] === array[row][s]){
                array[row][coll] = array[row][coll] + array[row][coll]
                array[row][s] = 0   
            }
        }
    }
    for(let coll = array[row].length-1; coll > 0; coll--){
        if(array[row][coll] === 0){
            let n = coll -1
            while(array[row][n] === 0 && n>0){
                n--
            }
            array[row][coll] = array[row][n]
            array[row][n] = 0
        }
    }
    console.log(">>>>>>>>>>>>>>>>>>>", array[row])
  }
}
// right();
function left() {
    for(let row = 0; row <= n; row++){
      for(let coll = 0; coll < array[row].length-1; coll++){
          if(array[row][coll] > 0){
              let s = coll + 1
              while(array[row][s] == 0){
                  s++
              }
              if(array[row][coll] === array[row][s]){
                  array[row][coll] = array[row][coll] + array[row][coll]
                  array[row][s] = 0   
              }
          }
      }
      for(let coll = 0; coll < array[row].length-1; coll++){
          if(array[row][coll] === 0){
              let n = coll + 1
              while(array[row][n] === 0 && n<array[row].length-1){
                  n++
              }
              array[row][coll] = array[row][n]
              array[row][n] = 0
          }
      }
      console.log(">>>>>>>>>>>>>>>>>>>", array[row])
    }
  }
  //   left();

function up(){
    for(let coll = 0; coll<=array.length -1; coll++){
        const collumn = [];
        for(let row = 0; row <= n; row++){
            collumn.push(array[row][coll])
        }   
        for(let i =0; i< collumn.length; i++){
            if(collumn[i] > 0){
                let ind = i+1;
                while(collumn[ind] === 0){
                    ind++;
                }
                if(collumn[i] == collumn[ind]){
                    collumn[i] = collumn[ind] + collumn[i]
                    collumn[ind] = 0
                }
            }
        }

        for(let j =0; j<collumn.length-1; j++){
            if(collumn[j] === 0){
                let n = j+1;
                while(collumn[n] === 0 && n< collumn.length-1){
                    n++
                }
                collumn[j] = collumn[n]
                collumn[n] = 0
            }
        }
        
        for(let row = 0; row <= n; row++){
            array[row][coll] = collumn[row]
        } 
    }
    console.log(">>>>>>>>>>>>>>>>>>>", array)
}
// up()

function down(){
    for(let coll = 0; coll<=array.length -1; coll++){
        const collumn = [];
        for(let row = 0; row <= n; row++){
            collumn.push(array[row][coll])
        }   
        // console.log("~~~~~~~~~~~~~~~", collumn)

        for(let i = collumn.length - 1 ; i > 0; i--){
            if(collumn[i] > 0){
                let ind = i-1;
                while(collumn[ind] === 0){
                    ind--;
                }
                if(collumn[i] == collumn[ind]){
                    collumn[i] = collumn[ind] + collumn[i]
                    collumn[ind] = 0
                }
            }
        }
        // console.log("~~~~~~~~~~~~~~~")

        for(let j = collumn.length-1; j > 0 ; j--){
            if(collumn[j] === 0){
                let n = j-1;
                while(collumn[n] === 0 && n > 0){
                    n--
                }
                [ collumn[j], collumn[n] ] = [ collumn[n], 0]
            }
        }
        
        for(let row = 0; row <= n; row++){
            array[row][coll] = collumn[row]
        } 
    }
    console.log(array)
}
down()