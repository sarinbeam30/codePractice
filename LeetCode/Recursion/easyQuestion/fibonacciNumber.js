let n_1 = 2
let n_2 = 3
let n_3 = 4

var sum = 0
function fib(n) {
    if (n === 0) { 
        return n 
    }

    let prePrev = 0
    let pre = 1
    n -= 1

    while (n > 0) {
        let current = pre + prePrev
        prePrev = pre
        pre = current
        n--
    }
    
    return pre
}

fib(n_3)