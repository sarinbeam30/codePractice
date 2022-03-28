let test_case_1 = [0, 3, 4, 2]


function kangaroo(x1=0, v1=2, x2=5, v2=3) {
    let result = 'Start';
    let distanceKangaroo1 = x1;
    let distanceKangaroo2 = x2;
    let count = 0;

    while (result === 'Start') {
        if( (distanceKangaroo1 !== 0) && (distanceKangaroo2 !== 0) && (distanceKangaroo1 === distanceKangaroo2) ) {
            result = 'YES';
        } else if (count > 10000) {
            break;
        } else {
            distanceKangaroo1 += v1;
            distanceKangaroo2 += v2;
            count += 1;
        }
    }

    if(result === 'Start') {
        return ('NO');
    } else {
        return (result);
    }
}

kangaroo();