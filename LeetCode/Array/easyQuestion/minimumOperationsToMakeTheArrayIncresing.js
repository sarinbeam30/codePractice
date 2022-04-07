let arr_1 = [1,5,2,4,1]

function minOperations(nums) {
    let sum = 0
    for (let i=0; i<nums.length; i++) {
        if (i !== 0) {
            let cal_different_between_num = before_num = after_num = 0
            before_num = nums[i]
            nums[i] = Math.max(nums[i-1]+1, nums[i])
            after_num = nums[i]
            cal_different_between_num = after_num - before_num
            sum += cal_different_between_num
        }
    }
    return sum
} 

minOperations(arr_1)