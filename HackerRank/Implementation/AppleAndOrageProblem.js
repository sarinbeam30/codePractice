let s = 7;
let t = 11;
let a = 5;
let b = 15;
let apples = [-2, 2, 1];
let oranges = [5, -6];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let apple_region = 0;
  let orange_region = 0;
  apples.forEach((apple_distance) => {
    if (a + apple_distance >= s && a + apple_distance <= t) {
      apple_region += 1;
    }
  });

  oranges.forEach((oranges_distance) => {
    if (b + oranges_distance >= s && b + oranges_distance <= t) {
      orange_region += 1;
    }
  });

  console.log(apple_region);
  console.log(orange_region);
}

countApplesAndOranges(s, t, a, b, apples, oranges);
