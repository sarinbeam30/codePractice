let arr = [5,3,2,4,1,2];
let max_arr = []
let result = 0

function find_sum_result(a,b) {
    sum = a+b;
    if(sum > result){
        result = sum
        if(max_arr) {
            max_arr = [];
            max_arr.push(a,b);
        }
    }
}

function subsetA(arr) {
    for(var i=0; i<arr.length; i++)
    {        
        for(var j=i+1; j<arr.length; j++)
        {
            find_sum_result(arr[i], arr[j]);
        } 
    }
}

subsetA(arr);
console.log(max_arr);