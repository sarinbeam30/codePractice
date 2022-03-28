let x_1 = 1
let y_1 = 2
let z_1 = 3

let x_2 = 1
let y_2 = 3
let z_2 = 2

function catAndMouse(x, y, z) {
    let distanceBetweenCatAandMouseC = Math.abs(z-y)
    let distanceBetweenCatBandMouseC = Math.abs(z-x)

    // console.log(distanceBetweenCatAandMouseC, distanceBetweenCatBandMouseC)

    if (distanceBetweenCatAandMouseC > distanceBetweenCatBandMouseC) {
        // console.log('Cat A')
        return 'Cat A'
    } else if (distanceBetweenCatAandMouseC === distanceBetweenCatBandMouseC) {
        // console.log('Mouse C')
        return 'Mouse C'
    } else {
        // console.log('Cat B')
        return 'Cat B'
    }

}

catAndMouse(x_1, y_1, z_1)
catAndMouse(x_2, y_2, z_2)
