let jewels_1 = "aA"
let stones_1 = "aAAbbbb"

function numJewelsInStones (jewels, stones) {
    jewels = jewels.split('')
    stones = stones.split('')

    let count = 0

    jewels.forEach(jewel => {
        stones.forEach(stone => {
            if (jewel === stone) {
                count++
            }
        })
    })
    return count
}

numJewelsInStones(jewels_1, stones_1)