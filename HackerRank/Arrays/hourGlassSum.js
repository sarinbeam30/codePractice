let arr_1 = [
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 0, 2, 4, 4, 0 ],
    [ 0, 0, 0, 2, 0, 0 ],
    [ 0, 0, 1, 2, 4, 0 ]
  ]

let arr_2 = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

let arr_3 = []

function hourglassSum(arr) {
    // Write your code here
    let max = 0
    let sum_line_1 = 0
    let sum_line_2 = 0
    let sum_line_3 = 0
    let num_start_line_1 = 0
    let num_end_line_1 = 2
    let total_sum_1_to_3 = 0

    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr[i].length-1; j++) {
            
            // set value to 0
            sum_line_1 = 0
            sum_line_2 = 0
            sum_line_3 = 0
            total_sum_1_to_3 = 0

            for(let k=num_start_line_1; k<=num_end_line_1; k++) {
                if (i >= 4 || (num_start_line_1 >= 4 && num_end_line_1 >= 6) ) {
                    break
                } else {
                    sum_line_1 += arr[i][k]
                    // console.log(i, k)
                }

            }
            // console.log('----- FIRST LINE')

            if (num_start_line_1 <= 3 && num_end_line_1 <= 5 && (i >= 0 && i <= 3) && (j >=0 && j<= 3) ) {
                sum_line_2 += arr[i+1][j+1]
                // console.log(i+1, j+1)
                // console.log('----- SECOND LINE')
            }

            for(let z=num_start_line_1; z<=num_end_line_1; z++) {
                if ( i >= 4 || (num_start_line_1 >= 4 && num_end_line_1 >= 6) ) {
                    break

                } else {
                    sum_line_3 += arr[i+2][z]
                    // console.log(i+2, z)
                }
            }
            // console.log('----- THIRD LINE')
            total_sum_1_to_3 = sum_line_1 + sum_line_2 + sum_line_3
            if (total_sum_1_to_3 > max) {
                max = total_sum_1_to_3
            }

            
            if (num_start_line_1 < 4 && num_end_line_1 < 6) {
                num_start_line_1 += 1
                num_end_line_1 +=1
            } else if (num_start_line_1 >= 4 && num_end_line_1 >= 6) {
                num_start_line_1 = 0
                num_end_line_1 = 2
            }
        }
    }

    console.log(max)
}

hourglassSum(arr_2)