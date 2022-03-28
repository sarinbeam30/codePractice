let step_1 = 8
let path_1 = 'UDDDUDUU'

let step_2 = 12
let path_2 = 'DDUUDDUDUUUD'

function countingValleys(steps, path) {
    let currentLevel = 0;
    let numberOfValley = 0;
    for(let i=0; i<steps; i++) {
        if (path[i] === 'U') currentLevel += 1
        if (path[i] === 'D') currentLevel -= 1
        
        if( currentLevel === 0 && path[i] === 'U' ) {
            numberOfValley += 1
        } 
    }
    console.log(numberOfValley)

}

countingValleys(step_2, path_2)
