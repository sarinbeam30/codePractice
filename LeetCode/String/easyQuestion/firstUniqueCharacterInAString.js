let s_1 = "leetcode" // 0
let s_2 = "loveleetcode" // 2
let s_3 = "aabb"
let s_4 = "ab"
let s_5 = "dddccdbba" // 8

function firstUniqChar (s) {
  let characterStatusStoredObject = {}
  let isSeeFirstUniqChar = false
  let firstUniqChar = ''
  let indexOfFirstUniqChar = 0

  if (s.length === 1) return 0

  for (let i=0; i<s.length; i++) {
    if (s[i] in characterStatusStoredObject) {
      characterStatusStoredObject[s[i]] += 1
    } else {
      characterStatusStoredObject[s[i]] = 1
    }
  }

  Object.entries(characterStatusStoredObject).forEach(([key, value]) => {
    if (isSeeFirstUniqChar === false) {
      if (value === 1) {
        isSeeFirstUniqChar = true
        firstUniqChar = key
      }
    }
  })

  if (isSeeFirstUniqChar === false) {
    indexOfFirstUniqChar = -1
    return indexOfFirstUniqChar
  }

  indexOfFirstUniqChar = s.indexOf(firstUniqChar)
  return indexOfFirstUniqChar
}

firstUniqChar(s_4)