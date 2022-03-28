let bill_1 = [ 3, 10, 2, 9 ]
let k_1 = 1
let b_1 = 12

let bill_2 = [3, 10, 2, 9]
let k_2 = 1
let b_2 = 7

function bonAppetit(bill, k, b) {
    // Write your code here
    let sum_meal = 0
    bill.forEach((bill_array, index) => {
        if(index !== k) {
            sum_meal += bill_array
        }
    })

    sum_meal /= 2
    if(sum_meal === b) {
        console.log('Bon Appetit')
    } else {
        console.log(b - sum_meal)
    }
}

bonAppetit(bill_1, k_1, b_1);