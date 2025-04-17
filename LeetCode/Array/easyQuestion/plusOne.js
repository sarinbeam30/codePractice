let digits_1 = [1,2,3]
let digits_2 = [9]
let digits_3 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]


let plusOne = (digits) => {
  let integeredDigit = BigInt(digits.join(''), 10)
  integeredDigit += 1n
  digits = integeredDigit.toString().split('')
  console.log(digits)
  return digits
}

plusOne(digits_1)