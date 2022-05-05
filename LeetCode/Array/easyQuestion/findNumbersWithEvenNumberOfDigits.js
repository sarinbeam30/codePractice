let nums_1 = [12,345,2,6,7896]      // 2
let nums_2 = [555,901,482,1771]     // 1

function findNumbers(nums) {
    let countDigitArray = nums.reduce( (accumulator, curretVal) => {
        accumulator.push(curretVal.toString().length)
        return accumulator
    }, [])

    let countEvenNumber = countDigitArray.reduce( (accumulator, curretVal) => {
        if (curretVal % 2 === 0) {
            accumulator++
        }

        return accumulator
    }, 0)

    return countEvenNumber
}

findNumbers(nums_2)