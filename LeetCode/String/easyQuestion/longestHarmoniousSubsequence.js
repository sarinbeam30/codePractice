let nums_1 = [1,3,2,2,5,2,3,7]
let nums_2 = [1,2,3,4]

function findLHS (nums) {
    // SORT_ARRAY
    nums = nums.sort((a, b) => {
        return a-b;
    })

    let left = 0
    let right = 1
    let result = 0

    while(right < nums.length) {
        let diff = nums[right] - nums[left]

        if (diff === 1) {
            result = Math.max(result, right-left+1)
        }

        if (diff <= 1) {
            right += 1
        } else {
            left += 1
        }
    }

    return result
}

findLHS(nums_1)