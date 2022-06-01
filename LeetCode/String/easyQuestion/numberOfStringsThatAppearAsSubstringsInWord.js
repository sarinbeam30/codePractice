let patterns_1 = ["a","abc","bc","d"]
let word_1 = "abc"

let patterns_2 = ["mfisexgxiysnnqpifny"]
let word_2 = "isexgxiysnn"


let numOfStrings = (patterns, words) => {
    let countStringPattern = 0
    

    if (words.length < 2) {
        return 1
    }

    let findPermutations = (string) => {
        let permutationSet = new Set()
        let permutationsArray = []

        if (string.length <= 1) {
            return string
        } 

        for (let i=0; i<string.length; i++) {
            let char = string[i]
            let remainingChars = string.slice(0, i) + string.slice(i+1, string.length)
            permutationSet.add(char)
            permutationSet.add(remainingChars)
    
            for (let permutation of findPermutations(remainingChars)) {
                permutationSet.add(char + permutation)
            }
        }

        permutationsArray = [...permutationSet]
        return permutationsArray
    }

    let permutationArr = findPermutations(words)

    // SORT BY USING SORT-BUILD-IN FUNCTION
    permutationArr = permutationArr.sort((a, b) => a.length - b.length)

    // SORT BY USING TWO-LOOPING
    // for (let i=0; i<permutationArr.length; i++) {
    //     for (let j=0; j<permutationArr.length; j++) {
    //         if (typeof(permutationArr[j]) === 'string' && typeof(permutationArr[j-1]) === 'string' && permutationArr[j].length < permutationArr[j-1].length) {
    //             let temp = permutationArr[j-1]
    //             permutationArr[j-1] = permutationArr[j]
    //             permutationArr[j] = temp
    //         }
    //     }
    // }

    permutationArr.forEach((per) => {
        patterns.forEach((pat) => {
            if (per === pat) countStringPattern++
        })
    })

    return countStringPattern
}

let numOfStringsFromInternet = (patterns, word) => {
    let countStringPattern = 0

    for (let char of patterns) {
        // console.log(char)
        if (word.includes(char)) {
            console.log('if : ' ,word, char)
            countStringPattern++
        } else {
            console.log('else : ', word, char)
        }
    }

    console.log(countStringPattern)
    return countStringPattern
}


numOfStringsFromInternet (patterns_2, word_2)