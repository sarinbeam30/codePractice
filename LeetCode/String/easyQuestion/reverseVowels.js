let string_1 = "hello"
let string_2 = "leetcode"


function reverseVowels (str) {
    let groupOfVowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let obj = {}

    for (let i=0; i<str.length; i++) {
        if (groupOfVowel.indexOf(str[i].toLowerCase()) !== -1) {
            obj[str[i]] = i
        } 
    }
    console.log(obj)

    let onlyValueObject = Object.values(obj).reverse()

    Object.entries(obj).forEach(([key, value], index) => {
        obj[key] = onlyValueObject[index]
    })

    console.log(obj)



    Object.entries(obj).forEach(([key, value], index) => {
        // console.log(value, str.substring(value+1))
        str = str.substring(0, value) + key + str.substring(value+1)
    })

    console.log(str)
}

function reverseVowelsFromInternet (str) {
    let groupOfVowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let first_character = 0
    let last_character = str.length-1
    let arr = str.split('')


    while (first_character < last_character) {
        if (first_character < last_character) {
            if (groupOfVowel.indexOf(arr[first_character]) !== -1 && groupOfVowel.indexOf(arr[last_character]) !== -1) {
                [arr[first_character], arr[last_character]] = [arr[last_character], arr[first_character]];
                
                ++first_character
                --last_character
            }
        }

        if (first_character < last_character && groupOfVowel.indexOf(arr[first_character]) === -1 ) {
            ++first_character
        }

        if (first_character < last_character && groupOfVowel.indexOf(arr[last_character]) === -1) {
            --last_character
        }

    }

    arr = arr.join('');
    return arr;
}

function semiColonProblem () {
    let a=undefined, b=undefined, c=undefined;
    [a, b] = (['A', 'B']
    [(b, c)] = ['BB', 'C']);
    console.log(`a=${a}, b=${b}, c=${c}`);
}


reverseVowelsFromInternet(string_2)
reverseVowelsForLoop(string_2)