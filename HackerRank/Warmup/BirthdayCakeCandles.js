let arr = [3, 2, 1, 3];
let json_result = {};

function birthdayCakeCandles(candles) {
    candles.forEach((value) => {
        if(value in json_result) {
            json_result[value] += 1;
        } else {
            json_result[value] = 1;
        }
    });
    
    let arrayValue = Object.values(json_result);
    let maxValueInArray = Math.max.apply(null, arrayValue);
    return maxValueInArray;
    // console.log(typeof(maxValueInArray), maxValueInArray);
}

birthdayCakeCandles(arr);