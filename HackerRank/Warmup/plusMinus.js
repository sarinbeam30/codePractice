let arr = [-4, 3, -9, 0, 4, 1];


function plusMinus(arr) {
    let num_positive_value = 0;
    let num_negative_value = 0;
    let num_zero_value = 0;
    let arr_length = arr.length;
    arr.forEach((value) => {
        if(value === 0) {
            num_zero_value += 1;
        } else if (value > 0) {
            num_positive_value += 1;
        } else {
            num_negative_value += 1;
        }
    })

    let propo_positive = num_positive_value/arr_length;
    let propo_negative = num_negative_value/arr_length;
    let propo_zero = num_zero_value/arr_length;
    console.log(propo_positive.toFixed(6));
    console.log(propo_negative.toFixed(6));
    console.log(propo_zero.toFixed(6));
}

plusMinus(arr);