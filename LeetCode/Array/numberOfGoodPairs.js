let nums_1 = [1,2,3,1,1,3]

function numIdenticalPairs(nums) {
    // let count = 0

    // SOLUTION_1 
    // for(let i=0; i<nums.length; i++) {
    //     for(let j=i+1; j<nums.length; j++) {
    //         console.log(nums[i], nums[j])
    //         if(nums[i] === nums[j]) {
    //             count++
    //         }
    //     }
    // }
    // console.log(count)

    // SOLUTION_2
    let count = 0
    let object_map = {}
    nums.forEach((num) => {
        if (object_map[num]) {
            count += object_map[num]
            object_map[num] += 1
            console.log(object_map[num], num, count)
        } else {
            object_map[num] = 1
            console.log('else', object_map, num)
        }
    })
    // console.log(count)
}

numIdenticalPairs(nums_1)