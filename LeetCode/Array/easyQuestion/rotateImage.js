let matrix_1 = [[1,2,3],[4,5,6],[7,8,9]]        // [[7,4,1],[8,5,2],[9,6,3]]
let matrix_2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

// [[20, 10, 00], [21, 11, 01], [22, 12, 02]]

let roate = (matrix) => {
  transponse(matrix)
  reverse(matrix)
  // let secondDimensionMatrix = []
  // let firstDimensionMatrix = []
  // let currentI = 0
  // let isIChangeOrNot = false
  // for (let i=0; i<matrix.length; i++) {
  //   for (let j=matrix.length-1; j>=0; j--) {
  //     if (i === 0) {
  //       currentI = i
  //       isIChangeOrNot = false
  //     } else {
  //       if (currentI !== i) {
  //         firstDimensionMatrix.push(secondDimensionMatrix);
  //         secondDimensionMatrix = [];
  //         isIChangeOrNot = true
  //         currentI = i
  //       } else {
  //         isIChangeOrNot = false
  //       }
  //     }

  //     // console.log('j && i : ', j, i, 'matrix[j][i] : ',matrix[j][i])
  //     // console.log('i && j : ', i, j, 'matrix[i][j] : ',matrix[i][j])
  //     // console.log(isIChangeOrNot);

  //     secondDimensionMatrix.push(matrix[j][i]);


  //     // [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
  //     // console.log(matrix, '\n--------------------------');

  //     if (i === matrix.length-1 && j === 0) {
  //       console.log(`i === matrix.length-1 && j === 0`)
  //       firstDimensionMatrix.push(secondDimensionMatrix);
  //       // console.log(matrix);
  //       // matrix = []
  //       // matrix = firstDimensionMatrix
  //       console.log(firstDimensionMatrix)
  //       // console.log(32)
  //     }

  //   }
  // }
  // return matrix
}

let transponse = (matrix) => {
  let matrixLength = matrix.length
  for (let i=0; i<matrixLength; i++) {
    for (let j=i+1; j<matrixLength; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  console.log(matrix)
}

let reverse = (matrix) => {
  let matrixLength = matrix.length
  for (let i=0; i<matrixLength; i++) {
    matrix[i] = [...matrix[i]].reverse();
  }
  console.log(matrix)
}

roate(matrix_1)