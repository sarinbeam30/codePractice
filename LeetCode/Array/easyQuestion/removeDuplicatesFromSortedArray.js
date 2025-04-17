let nums_1 = [1,1,2]
let nums_2 = [0,0,1,1,1,2,2,3,3,4]

function removeDuplicates (nums) {

  let repeatedNumberCount = 0
  for (let i=0; i<nums.length && nums[i] !== '_'; i++) {
    if (nums[i+1] === nums[i]) {
      nums.splice(i+1, 1)
      nums.push('_')
      repeatedNumberCount += 1
    } else {
      if (nums[i-1] && nums[i-1] === nums[i]) {
        nums.splice(i, 1)
        nums.push('_')
        repeatedNumberCount += 1
      }
    }
  }
  console.log(nums, repeatedNumberCount)
  return nums, repeatedNumberCount
}

removeDuplicates(nums_1)