let grade_array = [ 73, 67, 38, 33 ]

function gradingStudents(grades) {
    let new_grade_array = [];
    grades.forEach((grade) => {
        
        if(grade >= 38) {
            let find_next_multiple_five = Math.ceil( grade / 5 ) * 5;
            if(find_next_multiple_five - grade < 3) {
                new_grade_array.push(find_next_multiple_five);
            } else {
                new_grade_array.push(grade);
            }
        } else {
            new_grade_array.push(grade);
        }
    })
    return (new_grade_array);
}

gradingStudents(grade_array);
