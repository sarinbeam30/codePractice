let s_1 = "a1c1e1"
let s_2 = "a1b2c3d4e"

function replaceDigits(s) {
    const splitedLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let splitedS = s.split('')
    const mapDigit = new Map(splitedLetters.map((letter, index) => [letter, index]))

    for(let i=1; i<splitedS.length; i+=2) {
        if (mapDigit.has(splitedS[i]) === false && mapDigit.has(splitedS[i-1]) === true) {
            let sum = mapDigit.get(splitedS[i-1]) + parseInt(splitedS[i])
            let newLetter = [...mapDigit].find( ([key, value]) =>  sum === value)[0]
            splitedS[i] = newLetter
        }
    }
    console.log(splitedS.join(''))
    return splitedS.join('')
}

function replaceDigitsFromInternet (s) {
    for (let i = 1; i < s.length; i+=2) {
        let value = String.fromCharCode(s[i - 1].charCodeAt() + Number(s[i]));
        console.log(value)
        s = s.replace(s[i],value);
	}
    return s;
}

replaceDigitsFromInternet(s_2)