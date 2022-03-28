let n_1 = 6
let p_1 = 2

let n_2 = 5
let p_2 = 4

let n_3 = 6
let p_3 = 5

function min(a, b) {
    if(a > b) {
        return b
    } else {
        return a
    }
}

function pageCount(n, p) {
    // Write your code here
    let countFlipStartFromFirstPage = 0
    let countFlipStartFromLastPage = 0

    //CASE_1 : START_FROM_FIRST_PAGE
    countFlipStartFromFirstPage = Math.ceil((p - 1) / 2)

    //CASE_2 : START_FROM_LAST_PAGE
    if((n%2==0) && (p%2!==0) && (n-p) === 1) {
        countFlipStartFromLastPage = Math.ceil((n - p) / 2)
    } else {
        countFlipStartFromLastPage = Math.floor((n - p) / 2)
    }
    
    return (min(countFlipStartFromFirstPage, countFlipStartFromLastPage))
}

pageCount(n_3, p_3)