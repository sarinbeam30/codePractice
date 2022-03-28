let arr = [1,2,3,4,5]

function miniMaxSum(arr) {
    // Write your code here
    let start_index = 0;
    let sum_first_case = 0;
    let result = [];
    for(let i=0; i<arr.length; i++)
    {   
        for(let j=0; j<arr.length; j++)
        {
            if(start_index != j) {
                console.log(arr[j]);
                sum_first_case += arr[j];
            }
        }
        result.push(sum_first_case);
        sum_first_case = 0;
        start_index += 1;
        console.log('\n');
    }

    let min_of_array = Math.min.apply(Math, result);
    let max_of_array = Math.max.apply(Math, result);
    result = [];
    result.push(min_of_array, max_of_array);
    return result;
}

miniMaxSum(arr);