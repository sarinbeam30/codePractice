/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
//  function solve(board) {
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board.length; j++) {
//       if (
//         i !== 0 &&
//         i !== board.length - 1 &&
//         j !== 0 &&
//         j !== board.length - 1
//       ) {
//         if (
//           board[i][0] != "O" &&
//           board[i][board.length - 1] != "O" &&
//           board[0][i] != "O" &&
//           board[board.length - 1][i]
//         ) {
//           if (board[i][j] === "O") {
//             board[i][j] = "X"
//           }
//         }
//       }
//     }
//   }
//   console.log(board)
// }


let board_1 = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
]; // [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]


let board_2 = [
  ["X","O","X","X"],
  ["O","X","O","X"],
  ["X","O","X","O"],
  ["O","X","O","X"]
]; // [["X","O","X","X"],["O","X","X","X"],["X","X","X","O"],["O","X","O","X"]]


// 00 01 02 03
// 10       13
// 20       23
// 30 31 32 33

let board_3 = [
  ["X","O","X","O","X","O"],
  ["O","X","O","X","O","X"],
  ["X","O","X","O","X","O"],
  ["O","X","O","X","O","X"]
]; // [ ["X","O","X","O","X","O"],
   //   ["O","X","X","X","X","X"],
   //   ["X","X","X","X","X","O"],
   //   ["O","X","O","X","O","X"] ]

// 00 01 02 03 04 05
// 10 11 12       15
// 20 21 22       25
// 30 31 32 33 34 35

function solve(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (
        i !== 0 &&
        i !== board.length - 1 &&
        j !== 0 &&
        j !== board.length - 1 
      ) {
        if (board[i][j] === "O") {
          // console.log(i, j)
          // board[i][j] = "X"

          // ROW --> 1, start
          if(board[0][1] !== "O" && board[1][0] !== "O") {
            console.log('aa ', i, j)
            board[i][j] = "X"
          }

          // ROW --> 1, middle [11 12 13 14]
          if(i > 1 && j > 1 && board[0][j] !== "O" && i <= board.length-2 && j <= board.length-2) {
            console.log('bb ',i, j)
            board[i][j] = "X"
          }

          // ROW --> 1, end
          // board[0][4] === "x" , board[1][5] === "X"
          if (board[0][board.length-2] !== "O" && board[1][board.length-1] !== "O") {
            console.log('cc ',i, j)
            board[i][j] = "X"
          }

          // ROW --> last_row, start [20 31]
          if (board[board.length-2][0] !== "O" && board[board.length-1][1] !== "O") {
            console.log('dd ', i, j)
            board[i][j] = "X"
          }

          // ROW --> last_row, middle [21 22 23 24]
          // board[1][1] === "X", board[1][2] === "O"
          if (i > 1 && j > 1 && board[board.length-3][j] !== "O" && i <= board.length-2 && j <= board.length-2) {
            // console.log('ee ', i, j)
            board[i][j] = "X"
          }

          // ROW --> last_row, end [23 32]
          console.log(board.length-1, board.length-2)
          // board[2][3] === "O" , board[3][2] === "O"
          if (board[board.length-2][board.length-1] !== "O" && board[board.length-1][board.length-2] !== "O") {
            // console.log('ff ', i, j)
            board[i][j] = "X"
          }
        }

      }
    }
  }
  console.log(board)
}


function solveFromInternet(board) {
  if (!board.length) return;

  // change every square connected to left and right borders from 0 to temporary #
  for (let i=0; i<board.length; i++) {
    mark(board, i, 0);
    mark(board, i, board[0].length-1);
  }

  // change every square connected to top and bottom borders from O to temporary #
  for (let i=1; i<board[0].length-1; i++) {
    console.log('i ---- 1', i)
    mark(board, 0, i);
    mark(board, board.length-1, i)
  }

  for (let i=0; i<board.length; i++) {
    console.log('board[0].length : ' ,board[0].length)
    for (let j=0; j<board[0].length; j++) {
      console.log(i, j)

      // change the rest of O to X
      if (board[i][j] === 'O') board[i][j] = 'X'

      // change temporary # back to O
      if (board[i][j] === '#')  board[i][j] = 'O'
    }
  }

  console.log(board)
}

function mark(board, i, j) {
  if (i<0 || i>board.length-1 || j<0 || j>board[0].length-1)  return
  if (board[i][j] !== 'O')  return

  console.log('i : ', i, '\nj : ', j)
  board[i][j] = '#'

  mark(board, i-1, j)
  mark(board, i+1, j)
  mark(board, i, j-1)
  mark(board, i, j+1)
}

solveFromInternet(board_3);