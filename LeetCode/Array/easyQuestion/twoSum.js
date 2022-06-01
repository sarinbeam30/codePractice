let nums_1 = [2,7,11,15], target_1 = 9
let nums_2 = [3,2,4], target_2 = 6
let nums_3 = [3,3], target_3 = 6
let nums_4 = [-1,-2,-3,-4,-5], target_4 = -8 // pass
let nums_5 = [150,24,79,50,88,345,3], target_5 = 200
let nums_6 = [3,2,95,4,-3], target_6 = 92
let nums_7 = [2,1,9,4,4,56,90,3], target_7 = 8 

let twoSum = (nums, target) => {
  let i = 0
  let numsLength = nums.length-1
  let j = numsLength
  let countNegativeNumber = 0

  nums.forEach((ele) => {
    if (ele < 0) {
      countNegativeNumber++
    }
  })

  if(countNegativeNumber === numsLength+1) {
    nums = nums.map(Math.abs)
    target = Math.abs(target)
  }

  while (i <= numsLength && j >= 0) {
    if (nums[i] + nums[j] > target) {
      if (nums[i] === nums[j]) {
        console.log('ko check noi')
        i = 0
        j = 1
      }
      j--
      console.log('29 (after) , nums[i] + nums[j] > target : ', nums[i], nums[j])
    }

    if (nums[i] + nums[j] < target) {
      i++
      console.log('40 nums[i] + nums[j] < target : ', nums[i], nums[j])
    }

    if (nums[i] + nums[j] === target) {
      var arr = [i, j]
      break
    }
  }

  console.log(arr)
  return arr
}

// Approach 1: Brute Force
let twoSumFromInternet = (nums, target) => {
  for (let i=0; i<nums.length; i++) {
    for (let j=i+1; j<nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(nums[i], nums[j])
        return [i, j]
        // return [i, j]
      }
    }
  }
}

// Approach 2: Two-pass Hash Table (JS object)
let twoSumFromInternetByUsingHashTable = (nums, target) => {
  const indices = {};

  nums.forEach((item, index) => {
    indices[item] = index
  });

  console.log('indices : ', indices)

  for (let index=0; index<nums.length; index++) {
    const complement = target - nums[index];
    console.log(complement, ' = ', target, ' - ', nums[index]);

    // console.log(81, index ,indices[complement])
    if (indices[complement] !== undefined && indices[complement] !== index) {
      console.log(83, index, indices[complement])
      return [index, indices[complement]]
    }
  }
}

// Approach 3: One-pass Hash Table
let twoSumFromInternetByOnePassHashTable = (nums, target) => {
  const indices = new Map();

  for (let index=0; index<nums.length; index++) {
    // console.log(indices)
    const complement = target - nums[index];

    if (indices.has(complement)) {
      console.log(indices, complement)
      console.log([indices.get(complement), index])
      return [indices.get(complement), index]
    }

    indices.set(nums[index], index)
  }
}


twoSumFromInternetByOnePassHashTable(nums_4, target_4)
