let word_1 = ["gin", "zen", "gig", "msg"]
let word_2 = ["a"]
let word_3 = ["zocd", "gjkl", "hzqk", "hzgq", "gjkl"]   // 2

function uniqueMorseRepresentations(words) {

    let morseGroupArray = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    let alpha = Array.from(Array(26)).map((e, i) => i + 65);
    let englishAlphabetArray = alpha.map((x) => String.fromCharCode(x).toLowerCase());

    // convert alphabet to number of each word
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('')
        for (let j = 0; j < words[i].length; j++) {
            for (let k = 0; k < englishAlphabetArray.length; k++) {
                if (words[i][j] === englishAlphabetArray[k]) {
                    words[i][j] = k
                }
            }
        }
    }
    console.log(words)

    // convert number to morseGroup of each number
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            for (let k = 0; k < morseGroupArray.length; k++) {
                if (words[i][j] === k) {
                    words[i][j] = morseGroupArray[k]
                }
            }
        }
    }

    // join each array together
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].join('')
    }

    words = [...new Set(words)]
    console.log(words.length)
    return words.length
}

function uniqueMorseRepresentationsFromTheInternet(words) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const morseCode = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
    const mapMorse = new Map(morseCode.map((code, index) => [letters[index], code]));

    // morseCode.map((code, index) => {
    //     console.log(code, index)
    //     console.log(letters[index], code)
    // })

    const transformations = new Set();
    words.forEach((w) => {
        transformations.add(w.split('').map(l => mapMorse.get(l)).join(''));
    });

    return transformations.size;
}

// uniqueMorseRepresentations(word_3)
uniqueMorseRepresentationsFromTheInternet(word_3)