let acc_1 = [[2,8,7],[7,1,3],[1,9,5]]
let acc_2 = [[1,5],[7,3],[3,5]]
let acc_3 = [[1,2,3],[3,2,1]]

function maximumWealth(accounts) {
    let max = 0
    for (let i of accounts) {
        let sum_result = 0
        for (let j of i) {
            sum_result += j
        }

        if (sum_result > max) {
            max = sum_result
        }
    }
    return max
}

maximumWealth(acc_2)