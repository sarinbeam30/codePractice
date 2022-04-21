let item_1 = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]
let ruleKey_1 = "color"
let ruleValue_1 = "silver"

let item_2 = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]]
let ruleKey_2 = "type"
let ruleValue_2 = "phone"

function countMatches (items, ruleKey, ruleValue) {
    let newItems = []
    for (let i=0; i<items.length; i++) {
        for (let j=0; j<items.length; j++) {
            // console.log(items[i][j])

            if (ruleKey === 'type' && items[i][0] === ruleValue) {
                if (newItems.includes(items[i]) === false) {
                    newItems.push(items[i])
                }
            }

            if (ruleKey === 'color' && items[i][1] === ruleValue) {
                // console.log(items[i])
                if (newItems.includes(items[i]) === false) {
                    newItems.push(items[i])
                }
            }

            if (ruleKey === 'name' && items[i][2] === ruleValue) {
                // console.log(items[i])
                if (newItems.includes(items[i]) === false) {
                    newItems.push(items[i])
                }
            }
        }
    }
    // console.log(newItems.length)
    return newItems.length
}

function countMatchesFromInternet (items, ruleKey, ruleValue) {
    const indexMap = {
        type: 0,
        color: 1,
        name: 2,
    };

    const indexToCheck = indexMap[ruleKey];
    const initialValue = 0;
    // iterate thru the items array
    return items.reduce( (accumulator, curretVal) => {
        // console.log(curretVal)
        const valueToCheck = curretVal[indexToCheck]
        return valueToCheck === ruleValue ? ++accumulator : accumulator
        
    }, initialValue);
}

countMatches(item_1, ruleKey_1, ruleValue_1)
countMatches(item_2, ruleKey_2, ruleValue_2)

countMatchesFromInternet(item_1, ruleKey_1, ruleValue_1)
countMatchesFromInternet(item_2, ruleKey_2, ruleValue_2)

