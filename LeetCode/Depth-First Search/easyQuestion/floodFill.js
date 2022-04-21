let image_1 = [ [1,1,1],[1,1,0],[1,0,1] ]
let sr_1 = 1
let sc_1 = 1
let newColor_1 = 2

let image_2 = [ [0,0,0], [0,0,0] ]
let sr_2 = 0
let sc_2 = 0
let newColor_2 = 2

function floodFill (image, sr, sc, newColor) {
    let currentColor = image[sr][sc]
    
    // console.log(currentColor, sr, sc)

    if (newColor === currentColor) return image

    function callDFS(img, row, col) {
        if (row >= img.length || row < 0 || col >= image[0].length || col < 0 || img[row][col] !== currentColor) return;

        img[row][col] = newColor
        callDFS(img, row-1, col)    // up
        callDFS(img, row+1, col)    // down
        callDFS(img, row, col-1)    // left
        callDFS(img, row, col+1)    // right

        // console.log(img)
        return img
    }

    // console.log('ko check noi')
    return callDFS(image, sr, sc);
}

console.log(floodFill(image_1, sr_1, sc_1, newColor_1))