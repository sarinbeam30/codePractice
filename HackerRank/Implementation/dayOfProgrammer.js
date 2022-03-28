let year_1 = 2017;
let year_2 = 2016;
let year_3 = 1800;
let year_4 = 1918;

function dayOfProgrammer(year) {
    let isLeapYear = false;
    let sumOfDay = 0;
    let findDate = 0;
    let leapYearOfJulianCalenderArray = [1700, 1800, 1900, 1918]

    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                isLeapYear = true;
            } else {
                for(let i=0; i<leapYearOfJulianCalenderArray.length; i++){
                    if(year === leapYearOfJulianCalenderArray[i]) {
                        isLeapYear = true;
                        break;
                    } else {
                        isLeapYear = false;
                    }
                }
            }
        } else {
            isLeapYear = true;
        }
    } else {
        isLeapYear = false;
    }
    
    if(isLeapYear) {
        // console.log('ko check noi -- if')
        sumOfDay = (31 + 29 + 31 + 30 + 31 + 30 + 31 + 31);
        findDate = 256 - sumOfDay;
        console.log('if');
        return (findDate + '.09.' + year);

    }
    //SUM_OF_DAY(NORMAL_YEAR) 
    else {
        if(year === 1918) {
            return '26.09.1918'
        } else {
            console.log('ko check noi -- else case')
            sumOfDay = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31;
            findDate = 256 - sumOfDay;
            console.log('not leap');
            return (findDate + '.09.' + year);
        }

    }
}

dayOfProgrammer(year_4);