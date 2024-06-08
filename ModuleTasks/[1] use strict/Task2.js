'use strict';

function includesValue(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}

console.log(includesValue([1, 2, 3, 4, 5], 3)); // true
console.log(includesValue([1, 2, 3, 4, 5], 6)); // false
console.log(includesValue(['apple', 'banana', 'cherry'], 'banana')); // true
console.log(includesValue(['apple', 'banana', 'cherry'], 'grape')); // false
