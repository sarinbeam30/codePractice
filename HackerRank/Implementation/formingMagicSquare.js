let array_1 = [[4, 9, 2], [3, 5, 7], [8, 1, 5]]


function getCost(arr, magic) {
    let cost = 0
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            // console.log(arr[0][0])
            cost += Math.abs(arr[i][j] - magic[i][j])
        }
    }

    return cost
}

function formingMagicSquare(s) {
    // Write your code here

    let all_magic = [
        [  [8, 1, 6], [3, 5, 7], [4, 9, 2]  ],
        [  [6, 1, 8], [7, 5, 3], [2, 9, 4]  ],
        [  [4, 9, 2], [3, 5, 7], [8, 1, 6]  ],
        [  [2, 9, 4], [7, 5, 3], [6, 1, 8]  ],
        [  [8, 3, 4], [1, 5, 9], [6, 7, 2]  ],
        [  [4, 3, 8], [9, 5, 1], [2, 7, 6]  ],
        [  [6, 7, 2], [1, 5, 9], [8, 3, 4]  ],
        [  [2, 7, 6], [9, 5, 1], [4, 3, 8]  ]
    ];

    let cost_array = []

    for (let square of all_magic) {
        // console.log(s, typeof(s), square, typeof(square))
        cost = getCost( s, square)
        // console.log(`cost : `,cost)
        cost_array.push(cost)
    }

    minCost = Math.min.apply(Math, cost_array)
    console.log(minCost)
    return minCost
}

formingMagicSquare(array_1)