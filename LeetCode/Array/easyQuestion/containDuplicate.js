let nums_1 =[1,2,3,1]
let nums_2 =[1,2,3,4]

let containsDuplicate = (nums) => {
    
    let newObject = nums.reduce((object, currentValue) => {
        if (currentValue in object) {
            object[currentValue] += 1
        } else {
            object[currentValue] = 1
        }

        return object
    }, {}) 

    let isDuplicateValue = false
    Object.values(newObject).forEach((value, index) => {
        if (value >= 2) {
            isDuplicateValue = true
        }
    })
    return isDuplicateValue
}

containsDuplicate(nums_2)