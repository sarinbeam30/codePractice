let scores_test_1 = [10, 5, 20, 20, 4, 5, 2, 25, 1];
let scores_test_2 = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

function breakingRecords(scores) {
  // Write your code here
  let min = 0;
  let max = 0;
  let count_min = 0;
  let count_max = 0;
  let arrayResult = [];

  scores.forEach( (element, index) => {
      if(index === 0) {
          min = element;
          max = element;
      }

      //CASE MAX
      if(element > max) {
          max = element;
          count_max += 1;
      } else if(element < min) {
          min = element;
          count_min += 1;
      } 
  });

  arrayResult.push(count_max, count_min);
  
  return(arrayResult);
}

breakingRecords(scores_test_1);
