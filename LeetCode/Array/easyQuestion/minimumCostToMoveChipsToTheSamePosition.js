let position_1 = [1, 2, 3]
let position_2 = [2,2,2,3,3]
let position_3 = [1,1000000000]

function minCostToMoveChips(position) {
    let numberOfChipAtEvenPosition = 0
    let numberOfChipAtOddPosition = 0

    for (let i=0; i<position.length; i++) {
        if (position[i] % 2 === 0) {
            numberOfChipAtEvenPosition += 1
        } else {
            numberOfChipAtOddPosition += 1
        }
    }
    return Math.min(numberOfChipAtEvenPosition, numberOfChipAtOddPosition)
}

minCostToMoveChips(position_3)