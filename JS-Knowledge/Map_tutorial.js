/**
 * Map 
 * The `Map` object is key-value pairs and remembers the orignal insertion order of the keys.
 * Any value (both objects and primitive values) may be used as either a key or value.
 */


/**
 * Primitive
 * In JavaScript, a primitive (Primitive value, primitive data type) is data that is not an object and has no methods.
 * There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol and null.
 * 
 * The primitive values are immutable.
 */


// The correct usage for storing data in the Map is through the `set(key, value)` method
const contacts = new Map()
// console.log(contacts)
contacts.set('Jessie', { phone: "213-555-1234", address: "123 N 1st Ave" })
// console.log(contacts.has('Jessie'))
// console.info(contacts.get('Jessie'))
// console.info(contacts.size)
// ------------------------------------------------------------ END


// Relation with Array objects
const kvArray = [ ['key1', 'value1'], ['key2', 'value2']]
const myMap = new Map(kvArray)
// console.info(myMap)
// console.info(myMap.get('key1'))
// console.info([...myMap])
// ------------------------------------------------------------ END


// Cloning and merging Maps
const first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
])

const second = new Map([
    [1, 'uno'],
    [2, 'dos']
])

// Merge maps with an array. The last repeated key wins.
const merged = new Map([...first, ...second, [1, 'หนึ่ง']])
console.log(merged.get(1))
console.log(merged.get(2))
console.log(merged.get(3))


// ------------------------------------------------------------ END


