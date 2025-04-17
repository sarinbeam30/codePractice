let s_1 = "A man, a plan, a canal: Panama" // true
let s_2 = "race a car" // false

var isPalindrome = (s) => {
  if (s.length === 1 ) { return true }

  // NOTE ABOUT REGEX
  // A character not in the range: a-z        [^a-z]
  // A character in the range: a-z or A-Z     [a-zA-Z]
  let nonAlphanumericString = s.toString().replace(/[^0-9a-zA-Z]/g, "")
  let lowercaseString = nonAlphanumericString.toLowerCase().split('')
  let forwardArray = []
  let backwardArray = []
  let forwardString = backwardString = ''
  let isPalindrome = false

  for (let i=0, j=lowercaseString.length-1; i<lowercaseString.length, j>=0; i++, j--) {
    forwardArray.push(lowercaseString[i])
    backwardArray.push(lowercaseString[j])
  }

  forwardString = forwardArray.join('')
  backwardString = backwardArray.join('')

  if (forwardString === backwardString) {
    isPalindrome = true
  }

  return isPalindrome
}

isPalindrome(s_2)