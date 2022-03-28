let n_1 = 25

function extraLongFactorials(n) {
    let sum = 0

    for (let i=1; i<=n; i++){
        if (sum === 0) {
            sum = i
        }
        sum *= i
    }

    return BigInt(sum)
}

console.log(extraLongFactorials(n_1))

