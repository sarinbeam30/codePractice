let prices_1 = [7,1,5,3,6,4] // 7
let prices_2 = [7,6,4,3,1] // 0
let prices_3 = [1,2,3,4,5] // 4
let prices_4 = [2,4,1] // 2
let prices_5 = [1,1,0] // 0
let prices_6 = [2,1,2,0,1] // 2

let maxProfit = (prices) => {
  // find minimum value and index of prices array
  let minimumValueIndex = 0
  let maximumProfit = 0
  let isAscendingOrder = true
  let buyPoint = minimumValueIndex

  for (let i=minimumValueIndex; i<prices.length; i++) {
    if (prices[i] < prices[i+1]) {
      isAscendingOrder = true
    } else {
      isAscendingOrder = false
      let diff = prices[i] - prices[buyPoint]

      if (diff > 0) {
        maximumProfit += diff
      }

      if (i+1 < prices.length) {
        buyPoint = i+1
      }
    }
  }

  if (isAscendingOrder) {
    maximumProfit = prices[prices.length-1] - prices[0]
  }
  return maximumProfit
  
}

maxProfit(prices_6)