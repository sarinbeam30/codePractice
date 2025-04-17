let s_1 = "anagram", t_1 = "nagaram"
let s_2 = "rat", t_2 = "car"
let s_3 = "xaaddy", t_3 = "xbbccy"

let sortObjectByKey = (obj) => {
  let newSortedObject = Object.keys(obj).sort().reduce((new_obj, currentValue) => {
    new_obj[currentValue] = obj[currentValue]
    return new_obj
  }, {})

  return newSortedObject
}

let isAnagram = (s, t) => {
  let s_obj = {}
  let t_obj = {}

  let s_split = s.split('')
  let t_split = t.split('')

  let isAnagram = false
  let breakFromLoop = false

  if(s_split.length !== t_split.length) return isAnagram
  
  s_split.forEach((value, index) => {
    if (value in s_obj) {
      s_obj[value] += 1
    } else {
      s_obj[value] = 1
    }
  })
  s_obj = sortObjectByKey(s_obj)

  t_split.forEach((value) => {
    if (value in t_obj) {
      t_obj[value] += 1
    } else {
      t_obj[value] = 1
    }
  })
  t_obj = sortObjectByKey(t_obj)

  Object.entries(s_obj).forEach(([s_key, s_value], s_index) => {
    Object.entries(t_obj).forEach(([t_key, t_value], t_index) => {
      if (breakFromLoop === false) {
        if (s_index === t_index) {
          if ((s_key === t_key) && (s_value === t_value)) {
            isAnagram = true
          } else {
            isAnagram = false
            breakFromLoop = true
          }
        }
      }
    })
  })
  console.log(isAnagram)
  return isAnagram
}

isAnagram(s_3, t_3)