let n = 9
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]


function sockMerchant(n, ar) {
    // Write your code here
    let category_json = {}
    let number_of_pair = 0
    ar.forEach((ar_array) => {
        
        if(ar_array in category_json) {
            category_json[ar_array] += 1
        } else {
            category_json[ar_array] = 1
        }
    })

    category_json = Object.fromEntries(Object.entries(category_json).map( ([key, value]) => [key, Math.floor(value/2)] ))
    Object.values(category_json).map( (value) => {
        number_of_pair += value;
    })

    return (number_of_pair);

}

sockMerchant(n, ar)