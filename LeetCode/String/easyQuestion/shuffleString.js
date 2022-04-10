let s_1 = "codeleet"
let indices_1 = [4,5,6,7,0,2,1,3]

function shuffleString(s, indices) {
    
    let indices_length = indices.length;
    let new_str = new Array (indices_length);

    for (let i=0; i<indices_length; i++) {
       new_str[indices[i]] = s[i]
    }

    s = new_str.join('')
    return s
}

shuffleString(s_1, indices_1)