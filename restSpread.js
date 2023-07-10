/*
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
*/

/* Write an ES2015 Version */
const filterOutOdds = (...args) => {
    return args.filter(num => {
        return num % 2 === 0;
    })
}

// OR
const filterOutOddsAgain = (...args) => args.filter(num => num % 2 === 0);


// findMin
const findMin = (...args) => Math.min(...args);

//mergeObjects
const mergeObjects = ({...args1}, {...args2}) => ({...args1, ...args2});

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...vars) => {
    return [...arr, ...vars.map(value => value * 2)];
}

//Slice and Dice!
/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let randomNum = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomNum), ...items.slice(randomNum + 1, items.length)];
}


/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];

}
 

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj, [key]: val};
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = [...obj];
    delete newObj[key];
    return newObj;
}

let objjj = {teacher: "Nikolai", hobbies: "League of Legends", food: "pizza"}
removeKey(objjj, teacher)

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    return {...obj, [key]: val};
}