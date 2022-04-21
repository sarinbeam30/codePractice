let seats_1 = [3,1,5]
let students_1 = [2,7,4]

let seats_2 = [4,1,5,9]
let students_2 = [1,3,2,6]

let seats_3 = [2,2,6,6]
let students_3 = [1,3,2,6]

let seats_4 = [3,20,17,2,12,15,17,4,15,20]
let students_4 = [10,13,14,15,5,2,3,14,3,18]    // Ans = 28

function minMovesToSeat (seats, students) {
    let min_number_sum = 0

    // sorting seat array by using sort build-in function
    seats.sort(function(a, b) {
        return a-b;
    })

    // sorting seat array by using Bubble Sort method
    // for (let i=0; i<seats.length; i++) {        // Outer
    //     for (let j=0; j<seats.length; j++) {    // Inner
    //         if ( seats[j+1] < seats[j] ) {
    //             [seats[j+1], seats[j]] = [seats[j], seats[j+1]];
    //         } 
    //     }  
    // }

    students.sort(function (a, b) {
        return a-b
    })

    // sorting student array by using Bubble Sort method
    // for (let i=0; i<students.length; i++) {
    //     for (let j=0; j<students.length; j++) {
    //         if ( students[j+1] < students[j] ) {
    //             [students[j+1], students[j]] = [students[j], students[j+1]];
    //         }
    //     }
    // }

    // find the minimum number of moves of seats array and students array
    for (let i=0; i<seats.length; i++) {
        let diff_number = 0
        for (let j=0; j<students.length; j++) {
            if (i === j) {
                diff_number = Math.abs(seats[i] - students[j])
            }
        }
        min_number_sum += diff_number
    }
    return min_number_sum
}

minMovesToSeat(seats_4, students_4)