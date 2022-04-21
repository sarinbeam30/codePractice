let grid_1 = [ [0,1,0,0], [1,1,1,0], [0,1,0,0], [1,1,0,0] ]  // 16
let grid_2 = [ [1] ]    // 4
let grid_3 = [ [1,0] ]  // 4

function islandPerimeter (grid) {
    let amoutOfPerimeter = 0
    for (let row=0; row<grid.length; row++) {
        for (let column=0; column<grid[row].length; column++) {
            // console.log('grid[row][column] : ' ,grid[row][column]);
            if (grid[row][column]) {
                
                // check top
                if ( !grid[row-1] || !grid[row-1][column] ) {
                    // console.log('check top ', grid[row][column], row, column);
                    amoutOfPerimeter++;
                }

                // check down
                if ( !grid[row+1] || !grid[row+1][column] ) {
                    // console.log('check down ', grid[row][column], row, column);
                    amoutOfPerimeter++;
                }

                // check left
                if ( !grid[row][column-1] ) {
                    // console.log('check left : ', grid[row][column], row, column);
                    amoutOfPerimeter++;
                }
                
                // check right
                if ( !grid[row][column+1] ) {
                    // console.log('check right : ', grid[row][column], row, column);
                    amoutOfPerimeter++;
                }
            }
        }
    }

    console.log(amoutOfPerimeter)
    return amoutOfPerimeter
}

islandPerimeter(grid_2)