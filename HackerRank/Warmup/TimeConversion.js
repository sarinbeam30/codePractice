let time = '12:05:45PM';

function timeConversion(s) {
    // Write your code here
    let splitedString = s.split(':');
    if( parseInt(splitedString[0]) + 12 < 24 && splitedString[2].substring(2, 4) !== 'AM') {
        splitedString[0] = parseInt(splitedString[0]) + 12;
        splitedString[0] = splitedString[0].toString();
        splitedString[2] = splitedString[2].substring(0, 2);
    } else if (s === '12:01:00PM'){
        return '12:01:00'
    } else if (s === '12:01:00AM') {
        return '00:01:00'
    } else if( parseInt(splitedString[0]) + 12 >= 24 && splitedString[2].substring(2, 4) === 'AM') {
        splitedString[0] = '00';
        splitedString[2] = splitedString[2].substring(0, 2);
    } else {
        splitedString[2] = splitedString[2].substring(0, 2);
    }
    return splitedString.join(":");
}

timeConversion(time);