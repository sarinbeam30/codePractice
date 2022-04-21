// Flatten an array of arrays
let flattend = [ [0, 1], [2, 3], [4, 5]].reduce(
    ( previousValue, currentValue ) => previousValue.concat(currentValue),
    []
)
// console.log(flattend)


// Counting instances of values in an object
const names = ['Alice', 'Beam', 'Bob', 'Beam']
let countedNames = names.reduce(function (allnames, name) {

    if (name in allnames) {
        allnames[name]++;
    } else {
        allnames[name] = 1;
    }

    return allnames;
}, {})
// console.log(countedNames)


// Grouping objects by a property
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
    return objectArray.reduce( (acc, obj) => {
        // console.log(obj)
        let key = obj[property]
        // console.log(key)

        if (!acc[key]) {
            acc[key] = []
            // console.log('acc : ' ,acc)
        }

        acc[key].push(obj)

        return acc
    }, {})
}

let groupedPeople = groupBy(people, 'age')
console.log(groupedPeople)
