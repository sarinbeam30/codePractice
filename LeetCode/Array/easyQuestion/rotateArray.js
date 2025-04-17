let nums_1 = [1,2,3,4,5,6,7], k_1 = 3 // [5,6,7,1,2,3,4]
let nums_2 = [-1,-100,3,99], k_2 = 2  // [3,99,-1,-100]
let nums_3 = [1,2], k_3 = 3 // [2, 1]
let nums_4 = [1,2], k_4 = 2 // [1, 2]
let nums_5 = [1,2,3], k_5 = 2 // [2, 3, 1]

let rotate = (nums, k) => {
  


  // METHOD_1
  // let numsLength = nums.length-1;
  // for (let i=0; i<k; i++) {
  //   let tempValue = parseInt(nums.slice(-1).join(''));
  //   nums.splice(numsLength, 1);
  //   nums.unshift(tempValue);
  // }


  let isOddArray = nums.length % 2 === 0 ? false : true;
  let firstPartArray = [];
  let secondPartArray = [];
  if (isOddArray) {
    if (k % 2 === 0) {
      firstPartArray = nums.slice(0, k-1)
      secondPartArray = nums.slice(k-1, nums.length)
    } else {
      firstPartArray = nums.slice(0, k+1)
      secondPartArray = nums.slice(k+1, nums.length)
    }

  } else {
    if (k % 2 === 0) {
      firstPartArray = nums.slice(0, k)
      secondPartArray = nums.slice(k, nums.length)
    } else {
      firstPartArray = nums.slice(0, k-2)
      secondPartArray = nums.slice(k-2, nums.length)
    }
  }
  nums = secondPartArray.concat(firstPartArray)
  console.log(nums)  
};

rotate(nums_1, k_1);
