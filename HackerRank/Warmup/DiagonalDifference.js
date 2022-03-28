var arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
];

var arr_2 = [
    [-1 ,1, -7, -8],
    [-10, -8, -5, -2],
    [0, 9, 7, -1],
    [4, 4, -2, 1],
];

var min_index_i = 0;
var min_index_j = 0;
var max_index_i = 0;
var max_index_j = 0;
var middle_index_i = 0;
var middle_index_j = 0;

var pri_diagonal = 0;
var sec_diagonal = 0;

function find_min_max_i_j(arr) {
    arr.forEach((arrI, indexI) => {
        if (indexI <= min_index_i) {
            min_index_i = indexI;
        } else if (indexI >= max_index_i) {
            max_index_i = indexI;
        }

        arrI.forEach((arrJ, indexJ) => {
            if (indexJ <= min_index_j) {
                min_index_j = indexJ;
            } else if (indexJ >= max_index_j) {
                max_index_j = indexJ;
            }
        });
        middle_index_i = middle_index_j = Math.floor(arrI.length / 2);
    });
}

function diagonalDifference(arr) {
    // Write your code here
    find_min_max_i_j(arr);
    arr.forEach((arrI, indexI) => {
        arrI.forEach((arrJ, indexJ) => {
            if (indexI === indexJ) {
                pri_diagonal += arrJ;
            }

            if(indexI + indexJ === arrI.length - 1) {
                sec_diagonal += arrJ;
                console.log(indexI, indexJ, arrI.length - 1);
            }
        });
    });
    return Math.abs(pri_diagonal-sec_diagonal);
}

diagonalDifference(arr_2);
