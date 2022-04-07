let rectangles_1 = [[5,8],[3,9],[5,12],[16,5]]  // (5) --> n = 3
let rectangles_2 = [[2,3],[3,7],[4,3],[3,7]]    // (3) --> n = 3
let rectangles_3 = [[5,8],[3,9],[3,12]] // (5) --> n = 1

function getKeyByValues(object, value) {
    let key = null
    for (const [keyObject, valueObject] of Object.entries(object)) {
        if (valueObject === value) {
            key = keyObject
        }
    }
    return key
}

function getValueByKey(object, key) {
    let value = null
    let key_str = key.toString()
    for (const [keyObject, valueObject] of Object.entries(object)) {
        if (key_str === keyObject) {
            value = valueObject
        }
    }
    return value
}

function countGoodRectangles(rectangles) {
    let newObject = {}
    for (let i=0; i<rectangles.length; i++) {
        for(let j=0; j<2; j++) {
            if (j == 1) {
                if (newObject[Math.min(rectangles[i][j-1], rectangles[i][j])]) {
                    newObject[Math.min(rectangles[i][j-1], rectangles[i][j])] += 1
                } else {
                    newObject[Math.min(rectangles[i][j-1], rectangles[i][j])] = 1
                }
            }
        }
    }

    console.log(newObject)
    let highestKey = Math.max.apply(null, Object.keys(newObject))
    // let key = getKeyByValues(newObject, hightestValue)
    let value = getValueByKey(newObject, highestKey)
    console.log(value)
    return value
}

countGoodRectangles(rectangles_3)