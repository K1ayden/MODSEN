'use strict';

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels('Modsen')); // 2
console.log(countVowels('Arseniy')); // 3
console.log(countVowels('AABB')); // 2
console.log(countVowels('CCCC')); // 0
