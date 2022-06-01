let nums_1 = [0, 1, 0, 3, 12] // [1,3,12,0,0]
let nums_2 = [0]
let nums_3 = [0,0,1] // [1, 0, 0]
let nums_4 = [1]

var moveZeros = (nums) => {
    let nonZeroIndex = 0;

    for(let i=0; i < nums.length; i++){
        if(nums[i] != 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex ++;
        }
    }

    for(let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }

    console.log(nums)
}

moveZeros(nums_4)