let s_1 = "PAYPALISHIRING"
let numRows_1 = 3

function convert(s, numRows) {
    if ( numRows <=1 ) {
        return s;
    }

    let i, row = 0;
    let down = true;
    let new_array = [];

    for (i=0; i<numRows; i++) {
        new_array[i] = "";
    }

    for (i=0; i<s.length; i++) {
        new_array[row] += s[i];

        if (row === 0) {
            down = true
        }

        if (row === numRows-1) {
            down = false
        }

        down ? row++ : row--;
    }

    let answer = ""

    for (i=0; i<numRows; i++) {
        answer += new_array[i];
    }

    return answer
}

convert(s_1, numRows_1)