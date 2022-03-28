let n = 5
let arr_1 = [2, 4, 6, 8, 3]


function insertionSort1(n, arr) {
    // Write your code here
    let e = arr[arr.length - 1]
    for (let i=n-2; i>=0; i--) {
        
        if (arr[i] > e) {
            // console.log('if : ', arr[i], e)
            arr[i+1] = arr[i]
            console.log(arr.join(' '))

            if (i === 0) {
                arr[i] = e
                // console.log('i===0' ,arr[i], e)
                console.log(arr.join(' '))
            }

        } else if (arr[i] < e) {
            // console.log('elseif : ', arr[i+1], e)
            arr[i+1] = e
            console.log(arr.join(' '))
            break
        }       
    }
}

insertionSort1(n, arr_1)