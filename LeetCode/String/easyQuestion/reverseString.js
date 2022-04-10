let str_1 = ["h","e","l","l","o"]

function reverseString(str_arr) {
    for (let i=0, j=str_arr.length-1; i<str_arr.length, i<j; i++, j--) {
        // Destructuring Assignment Approach
        // let a = str_arr[i]
        // let b = str_arr[j]
        // console.info(a, b)
        // [a, b] = [b, a]

        // Temporary Variable Approach
        let temp = str_arr[i]
        str_arr[i] = str_arr[j]
        str_arr[j] = temp
    }
    console.log(str_arr)


    // Destructuring Assignment Approach
    // let a = [1,2,3];
    // let b = [3,2,1];
    // [a, b] = [b, a];
    // console.log(a, b)
}

reverseString(str_1)