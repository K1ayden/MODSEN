function compareObjects(obj1, obj2) {
    for (let key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
    }
    return true;
}

const objA = {a: 1, b: 2, c: 3};
const objB = {a: 1, b: 2};
const objC = {a: 1, b: 4};

console.log(compareObjects(objA, objB)); // true
console.log(compareObjects(objA, objC)); // false
