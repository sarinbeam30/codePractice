let s_1 = [1, 2, 1, 3, 2];
let d_1 = 3;
let m_1 = 2;

let s_2 = [1, 1, 1, 1, 1, 1];
let d_2 = 3;
let m_2 = 2;

let s_3 = [4];
let d_3 = 4;
let m_3 = 1;

function birthday(s, d, m) {
  // Write your code here
  let countResult = 0;
  let sum = 0;
  let count = 0;

  if (s.length > 1) {
    for (let i = 0; i < s.length - 1; i++) {
      count = 0;
      sum = 0;
      s.forEach((element, index) => {
        if (count < m + i && index >= i) {
          sum += element;
        }
        count += 1;
      });

      if (sum === d) {
        countResult += 1;
      }
      console.log("lap : ", i);
    }
  } else {
      s.forEach((element) => {
          sum += element;
      })

      if(sum === d) {
          countResult += 1;
      }
  }
  return (countResult);
}

birthday(s_3, d_3, m_3);
