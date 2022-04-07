let arr_1 = [3,0,1,1,9,7]
let a_1 = 7
let b_1 = 2
let c_1 = 3

// (0, 3, 1) --> 1 0 2
// (0, 1, 1) --> 1 2 3
// (0, 1, 9) --> 1 3 4

// (7, 3, 1) --> 5 0 2
// (7, 3, 0) --> 5 0 1
// (7, 0, 1) --> 5 1 2

function isGood(i, j, k, a, b, c) {
    if ( Math.abs(i-j) <= a && Math.abs(j-k) <= b && Math.abs(i-k) <= c) {
        return true
    }
}

function countGoodTriplets(arr, a, b, c) {
    let count = 0
    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            for (let k=j+1; k<arr.length; k++) {
                if (isGood(arr[i], arr[j], arr[k], a, b, c) === true) {
                    console.log(arr[i], arr[j], arr[k])
                    count += 1
                }
            }
        }
    }
    return count
}

countGoodTriplets(arr_1, a_1, b_1, c_1)