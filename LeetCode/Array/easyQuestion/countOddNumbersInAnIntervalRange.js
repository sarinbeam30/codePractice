let low_1 = 3
let high_1 = 7

function countOdds (low, high) {
    let sum = 0
    for (let i=low; i<=high; i++) {
        if (i % 2 !== 0) {
            sum++
        }
    }

    console.log(sum)
    return sum
}

countOdds(low_1, high_1)