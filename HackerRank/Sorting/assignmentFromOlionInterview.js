let arr_1 = [6,5,4,3,2,1]

function sort_arr(arr) {
    for (let j=0; j<arr.length; j++) {
        for (let i=0; i<arr.length; i++) {
            if (arr[i-1] > arr[i]) {
                let temp_arr = arr[i]
                arr[i] = arr[i-1]
                arr[i-1] = temp_arr
            }
        }
    }
}

sort_arr(arr_1)