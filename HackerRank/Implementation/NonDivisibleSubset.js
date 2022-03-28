let k_1 = 3
let s_1 = [ 1, 7, 2, 4 ]




function nonDivisibleSubset(k, s) {
    // Write your code here
    let permuntation_result_array =[]
    let longest_subset_array = []
    for (let i=0; i<s.length; i++) {
        for (let j=i+1; j<s.length; j++) {
            let obj = {}
            obj = {
                's[i]' : s[i],
                's[j]' : s[j],
                'sum' : s[i] + s[j]
            }
            permuntation_result_array.push(obj)
        }
    }

    permuntation_result_array.forEach((arr) => {
        if (arr.sum % k !== 0) {
            if (longest_subset_array.includes(arr['s[i]']) === false) {
                longest_subset_array.push(arr['s[i]'])
            }

            if (longest_subset_array.includes(arr['s[j]']) === false) {
                longest_subset_array.push(arr['s[j]'])
            }
        }
    })

    // console.log(longest_subset_array.length)
    return longest_subset_array.length
}

nonDivisibleSubset(k_1, s_1)

