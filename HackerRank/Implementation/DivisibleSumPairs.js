let n = 6;
let k = 3;
let ar = [1, 3, 2, 6, 1, 2];

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let validResultCount = 0;
    for(let i=0; i<n; i++)
    {
        for(let j=i+1; j<n; j++) {
            if( (ar[i] + ar[j]) % k === 0 ) {
                validResultCount += 1;
            }
        }
    }
    return validResultCount;
}

divisibleSumPairs(n, k, ar);