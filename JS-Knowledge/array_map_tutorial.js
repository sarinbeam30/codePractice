// Using map to reformat objects in array
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray);

// Using map generically
const map = Array.prototype.map;
const charCodes = map.call("Hello World", (x) => x.charCodeAt(0));

console.log(charCodes);

// Tricky Use Case
const returnInt = (element) => parseInt(element, 10);
console.log(["1", "2", "3"].map(returnInt));
