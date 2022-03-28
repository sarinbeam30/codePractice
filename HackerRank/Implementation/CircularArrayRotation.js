let a_1 = [1, 2, 3]
let k_1 = 2
let queries_1 = [0, 1, 2]

// 1,2,3 --> 3,1,2

function circularArrayRotation(or_arr, k, queries) {
    for (let i=0; i<k; i++) {
        or_arr.unshift(or_arr.pop()) 
    }
    return queries.map(q => or_arr[q])
}

circularArrayRotation(a_1, k_1, queries_1)