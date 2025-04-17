let strs_1 = ["flower","flow","flight"]                 // "fl"
let strs_2 = ["dog","racecar","car"]                    // ""
let strs_3 = ["Klower","Kflow","Kight"]                 // "K"
let strs_4 = ["flower","flower","flower","flower"]      // "flower"
let strs_5 = ["a","a","b"]                              // ""
let strs_6 = ["reflower","flow","flight"]               // ""
let strs_7 = ["acb","b","",""]                          // ""

let longestCommonPrefix = (strs) => {
  console.log(strs)
  let hasCommonPrefix = false
  let word = strs[0].substring(0, 1)
  let allWordInArrayIsSame = false

  if (strs.length === 1) return strs[0].toString()
  for (let i=0; i<strs.length; i++) {
    
    if (i !== 0 && strs[i].includes(word)) {
      // console.log(i)
      // console.log(strs[i].indexOf(word))
      if (strs[i].indexOf(word) !== -1) {
        word = strs[i].substring(0, i)
        if (strs[i-1].indexOf(word) === -1) {
          word = strs[i].substring(0, i-1)
          hasCommonPrefix = true
          // console.log(19, word)
        }

        if ((strs[i-1] === strs[i]) && (strs[i-1].length === strs[i].length)) {
          allWordInArrayIsSame = true
          // console.log(`allWordInArrayIsSame = true`, i-1, i)
        } else {
          allWordInArrayIsSame = false
          if (strs[0].slice(0, i) !== word) {
            // console.log(`allWordInArrayIsSame = false IN IF : `, strs[i-1], strs[i])
            word = ""
          }
          // console.log(`allWordInArrayIsSame = false`, strs[i-1], strs[i])
          // word = ""
        }
        hasCommonPrefix = true 
        // console.log(28, word, i)
      }
    } else {
      if (i !== 0) {
        if (strs[i].includes(word) === false) {
          // console.log('ttttt --- 1')
          word = ""
          allWordInArrayIsSame = false
        }
        // console.log(word, strs[i], i)
      }
    }
  }

  if (allWordInArrayIsSame) {
    // console.log('tttttt - 2')
    word = strs[0]
  }

  if (hasCommonPrefix === false) {
    word = ""
  }
  console.log('word : ', word)
  return word
}


let longestCommonPrefixFromInternet = (strs) => {
  // common prefix means every letter of every word must be correct
  const firstElement = strs[0]
  
  let commonPrefix = ''
  for (let i=0; i<firstElement.length; i++) {
    // if the prefix is common means every strings length should not matter
    // strs.every(e => console.log(76, e[i], firstElement[i]))
    if (strs.every(e => e[i] === firstElement[i])) {
      commonPrefix += firstElement[i]
    } else {
      break
    }
  }

  console.log(commonPrefix)
  return commonPrefix
}


// longestCommonPrefix(strs_1)
// longestCommonPrefix(strs_2)
// longestCommonPrefix(strs_3)
// longestCommonPrefix(strs_4)
// longestCommonPrefix(strs_5)
// longestCommonPrefix(strs_6)
// longestCommonPrefix(strs_7)

longestCommonPrefixFromInternet(strs_1)
longestCommonPrefixFromInternet(strs_2)
// longestCommonPrefixFromInternet(strs_3)
// longestCommonPrefixFromInternet(strs_4)
// longestCommonPrefixFromInternet(strs_5)
// longestCommonPrefixFromInternet(strs_6)
longestCommonPrefixFromInternet(strs_7)