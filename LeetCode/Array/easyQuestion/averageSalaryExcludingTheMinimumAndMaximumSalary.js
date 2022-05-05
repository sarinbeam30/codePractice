let salary_1 = [4000,3000,1000,2000]

function average(salary) {
    salary = salary.sort( (a, b) => {
        return a-b;
    })

    let sum = 0
    let count = 0
    for (let i=1; i<salary.length-1; i++) {
        sum += salary[i]
        count += 1
    }

    let average = (sum/count).toFixed(5)
    return average
}

average(salary_1)