let releaseTimes_1 = [9,29,49,50]
let keysPressed_1 = "cbcd"      // c

let releaseTimes_2 = [12,23,36,46,62]
let keysPressed_2 = "spuda"     // a

let releaseTimes_3 = [6,20,29,42,57,70,76,82,91]
let keysPressed_3 = "ugmzgryso"     // g

let releaseTimes_4 = [1, 2]
let keysPressed_4 = "ba"        // b



function slowestKey(releaseTimes, keysPressed) {
    let resultObject = {}
    for (let i=0; i<releaseTimes.length; i++) {
        let diff_time = 0
        if (i === 0) {
            diff_time = releaseTimes[i]
        } else {
            diff_time = releaseTimes[i] - releaseTimes[i-1]
        }

        if (resultObject[keysPressed.charAt(i)]) {
            resultObject[keysPressed.charAt(i)] += diff_time
        } else {
            resultObject[keysPressed.charAt(i)] = diff_time
        }
    }

    // console.log(resultObject)

    //selectThehighestObject
    let max = 0
    let highestObject = {}
    Object.entries(resultObject).forEach(([key_1, value_1], index_1) => {
        if (value_1 > max) {
            max = value_1
            highestObject = {}
            highestObject[key_1] = value_1
        }
    })

    // console.log(highestObject)
    // console.log(Object.values(highestObject))
    let highestObjectValues = Object.values(highestObject)[0]
    let finalArrayForCheckLexicographicalCase = []

    let count = 0
    Object.entries(resultObject).forEach(([key_1, value_1], index_1) => {
        if(value_1 === highestObjectValues) {
            count += 1
            finalArrayForCheckLexicographicalCase.push(key_1)
        } 
    })

    if (count === 1) {
        console.log(Object.keys(highestObject)[0])
        return Object.keys(highestObject)[0]
    } else {
       for (let i=0; i<finalArrayForCheckLexicographicalCase.length; i++) {
           if (finalArrayForCheckLexicographicalCase[i+1] > finalArrayForCheckLexicographicalCase[i]) {
               console.log(finalArrayForCheckLexicographicalCase[i+1])
               return finalArrayForCheckLexicographicalCase[i+1]
           } else {
               console.log(finalArrayForCheckLexicographicalCase[i])
               return finalArrayForCheckLexicographicalCase[i]
           }
       }
    }

}

function slowestKeyFromInternet (releaseTimes, keysPressed) 
{
    n = releaseTimes.length
    let time_max = null
    let time_i = null
    let result = null

    for(let i=0; i<n; i++) {
        if (i === 0){
            time_i = releaseTimes[i]
        } else {
            // console.log(releaseTimes[i-1], releaseTimes[i])
            time_i = releaseTimes[i] - releaseTimes[i-1]
        }

        
        if (time_i > time_max) {
            // console.log(time_i, time_max)
            time_max = time_i
            
            result = keysPressed[i]
            // console.log('keysPressed[i] ',keysPressed[i], i)
        }

        if (time_i === time_max && result < keysPressed[i]) {
            // console.log('if : ' ,result, keysPressed[i], i)
            result = keysPressed[i]
        }
    }

    console.log(result)
    return result
}

slowestKeyFromInternet(releaseTimes_1, keysPressed_1)
