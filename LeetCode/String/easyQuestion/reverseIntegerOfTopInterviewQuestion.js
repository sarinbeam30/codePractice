
let x_2 = -123
let x_3 = 120

let reverse = (x) => {
  let arrayStringX = x.toString().split('')
  let isNegativeNumber = false
  if (arrayStringX[0] === '-') {
    isNegativeNumber = true
    arrayStringX.splice(0, 1)
  }

  for (let i=0, j=arrayStringX.length-1; i<j; i++, j--) {
    [arrayStringX[i], arrayStringX[j]] = [arrayStringX[j], arrayStringX[i]];
  }

  if (parseInt(arrayStringX.join('')) >= Math.pow(-2, 31) && parseInt(arrayStringX.join('')) <= Math.pow(2, 31)-1) {
    if (isNegativeNumber) {
      newArrayStringX = '-' + parseInt(arrayStringX.join('')).toString()
      return newArrayStringX
    }
    return parseInt(arrayStringX.join('')).toString()
  } else {
    return 0
  }
}

reverse(x_2)
