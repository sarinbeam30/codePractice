

function maskCreditCardNumber (creditCardNumber = '1234 5567 8890 5567') {
  let maskedCreditCardNumber = ''
  maskedCreditCardNumber = creditCardNumber.split('')
  maskedCreditCardNumber = maskedCreditCardNumber.map((element, index) => {
    if (index <= 14) {
      if (element !== ' ') {
        element = '*'
      }
    }
    return element
  }).join('')
  return maskedCreditCardNumber
  console.log(maskedCreditCardNumber)
}

maskCreditCardNumber()