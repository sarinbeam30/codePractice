let candies_1 = [2,3,5,1,3]
let extraCandies_1 = 3

let candies_2 = [4,2,1,1,2]
let extraCandies_2 = 1

let candies_3 = [12, 1 , 12]
let extraCandies_3 = 10

function kidsWithCandies(candies, extraCandies) {
    let resultArray = []
    let maximumCandiesOfThisArray = Math.max.apply(null, candies)
    console.log(maximumCandiesOfThisArray)

    candies.forEach((candy) => {
        let sum = candy + extraCandies
        if(sum >= maximumCandiesOfThisArray) {
            resultArray.push(true)
        } else {
            resultArray.push(false)
        }
    })
    return resultArray
}

kidsWithCandies(candies_3, extraCandies_3)