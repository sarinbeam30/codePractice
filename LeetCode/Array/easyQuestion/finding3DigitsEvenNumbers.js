let digits_1 = [2, 1, 3, 0]
let digits_2 = [2, 2, 8, 8, 2]

function findEvenNumbers (digits) {

    // SORT digits array first
    digits = digits.sort((a, b) => {
        return a-b;
    })

    let digit_length = digits.length

    // Set is a object which used to store unique values of any type
    let new_set = new Set()
    for (let i=0; i<digit_length; i++) {
        if (digits[i] !== 0) {
            for (let j=0; j<digit_length; j++) {
                if (i !== j) {
                    for (let k=0; k<digit_length; k++) {
                        if (i !== k && j !== k && digits[k] % 2 === 0) {
                            new_set.add(digits[i]*100 + digits[j]*10 + digits[k])
                        }
                    }
                }
            }
        }
    }

    return Array.from(new_set)
}

findEvenNumbers(digits_2)