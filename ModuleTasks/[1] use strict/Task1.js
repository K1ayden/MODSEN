"use strict";

function factorial(n) {
    if (n < 0) {
        throw new Error('Negative numbers are not allowed.');
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

try {
    console.log(factorial(5)); // 120
    console.log(factorial(0)); // 1
} catch (error) {
    console.error(error.message);
}