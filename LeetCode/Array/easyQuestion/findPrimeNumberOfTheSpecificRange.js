let start_1 = 0
let stop_1 = 21

function findPrimeNumber (start, stop) {
    let primeNumberSet = new Set()
    for (let i=start; i<=stop; i++) {
        if (i !== 1) {
            if (i === 2 || i === 3 || i === 5 || i === 7) {
                primeNumberSet.add(i)
            } else {
                if (i%2 !== 0 && i%3 !== 0 && i%5 !== 0 && i%7 !== 0) {
                    primeNumberSet.add(i)
                }
            }
        }
    }

    console.log(primeNumberSet)
}

function findPrimeNumberFromInternet (start, stop) {
    let primeNumberSet = new Set()
    let isPrime = false

    for (let i=start; i<=stop; i++) {
        if (i > 1) {
            if (i === 2) {
                primeNumberSet.add(i)
            }
            
            // Loop for checking prime number which start from 2 to stop
            isPrime = false
            for (let j=2; j<i; j++) {
                if (i % j === 0) {
                    isPrime = false
                    break
                } else {
                    isPrime = true
                }
            } 
        }

        if (isPrime === true) {
            primeNumberSet.add(i)
        }
    }
    console.log(primeNumberSet)
}

// findPrimeNumber(start_1, stop_1)
findPrimeNumberFromInternet(start_1, stop_1)
