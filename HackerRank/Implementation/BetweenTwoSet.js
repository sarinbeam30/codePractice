// a = [ 3, 4 ]
// b = [ 24, 48 ]

a = [2, 4]
b = [16, 32, 96]

// a = [1]
// b = [72, 48]

function getTotalX(a, b) {
    let validCount = 0;
    for(let x=1; x<=100; x++) {
        if (a.every(int => (x % int == 0)) ) {
            if (b.every(int => (int % x == 0)) ) {
                validCount++;
            }
        }
    }

    return (validCount);
}


// getTotalX(a, b);


const isBelowThreshold = (currentValue) => console.log(currentValue);

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true