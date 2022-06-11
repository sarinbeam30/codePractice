import fetch from "node-fetch";

async function thisIsSyncFunction() {
  let result = 0;
  await fetch('https://codequiz.azurewebsites.net/data').then(res => res.json()).then((response) => {
    result = response.data;
  });

  result *= 10;
  console.log(result)
  return result;
}

thisIsSyncFunction();





