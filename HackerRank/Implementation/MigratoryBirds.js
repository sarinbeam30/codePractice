let arr_1 = [ 1, 4, 4, 4, 5, 3 ];
let arr_2 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];


function migratoryBirds(arr) {
    let json_result = {};
    arr.forEach(element => {
        if(element in json_result) {
            json_result[element] += 1;
        } else {
            json_result[element] = 1;
        }
    });

    let keyArray = [];
    let arrayValue = Object.values(json_result);
    let maxValueInArray = Math.max.apply(null, arrayValue);
    
    for (let [key, value] of Object.entries(json_result) ){
        if(value === maxValueInArray) {
            keyArray.push(key);
        }
    }

    if(keyArray.length === 1) {
        return (keyArray.join(''));
    } else {
        return (keyArray[0]);
    }
}

migratoryBirds(arr_2);