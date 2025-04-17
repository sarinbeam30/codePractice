
let s_1 = ["h","e","l","l","o"]
let s_2 = ["H","a","n","n","a","h"]

function reverseString(s) {
  for (let i=0, j=s.length-1; i<j; i++, j--) {
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

reverseString(s_2)
