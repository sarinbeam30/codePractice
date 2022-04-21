let num_1 = [1,2,3,4]

function runningSum(nums) {
    let new_nums = []
    for (let i=0; i<nums.length; i++) {
        let total = 0
        for(let j=0; j<=i; j++) {
            total += nums[j]
        }
        new_nums.push(total)
    }
    // console.log(new_nums)
    return new_nums
}

runningSum(num_1)