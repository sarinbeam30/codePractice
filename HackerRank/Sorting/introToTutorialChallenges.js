let v_1 = 4
let arr_1 = [1, 4, 5, 7, 9, 12]

function introTutorial(V, arr) {
    // Write your code here
    let ans = 0
    arr.forEach((arr, index) => {
        if (arr === V) {
            ans = index
        }
    })

    return ans
}


introTutorial(v_1, arr_1);