// What is a Two-Pointer technique 
// --> It is used for searching pairs in a sorted array.


let arr = [1, 3, 4, 8, 9]
let target = 11

function twoSum(arr, target) {
    for (let i=0, j=arr.length-1; i<j;) {
        let sum = arr[i] + arr[j]
        if (sum === target) {
            console.log([arr[i], arr[j]])
            return [arr[i], arr[j]]
        } else if (sum < target) {
            i++
        } else {
            j--
        }
        console.log(i, j)
    }
}

twoSum(arr, target)