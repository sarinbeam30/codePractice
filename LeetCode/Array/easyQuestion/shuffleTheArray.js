
nums = [2,5,1,3,4,7]
n = 3
function shuffle(nums, n) {
    let new_arr = []
    for (let i=0,j=n; i < j; i++,j++) {
        if (i == n) {
            break
        }
        if (nums[i] && nums[j]) {
            new_arr.push(nums[i], nums[j])
        }

    }
    console.log(new_arr)
    return new_arr
};

shuffle(nums, n)