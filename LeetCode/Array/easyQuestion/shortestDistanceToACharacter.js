let s_1 = "loveleetcode"
let c_1 = "e"   // [3,2,1,0,1,0,0,1,2,2,1,0]

let s_2 = "aaab"
let c_2 = "b"  // [3,2,1,0]

function shortestToChar (s, c) {
    let arrayOfMinAbs = []
    s = s.split('')

    positionOfChar = s.reduce( (previousVal, currentVal, index) => {
        if (currentVal === c) {
            previousVal.push(index)
        }
        return previousVal
    }, [])

    for(let i=0; i<s.length; i++) {
        let minAbs = 0
        for (let j=0; j<positionOfChar.length; j++) {
            if (i === positionOfChar[j]) {
                minAbs = 0
                break
            } else {
                if (minAbs === 0) {
                    minAbs = Math.abs(i-positionOfChar[j])
                } else {
                    if ( Math.abs(i-positionOfChar[j]) < minAbs ) {
                        minAbs = Math.abs(i-positionOfChar[j])
                    }
                }
            }
        }
        arrayOfMinAbs.push(minAbs)
    }
    return arrayOfMinAbs
}



shortestToChar(s_1, c_1)