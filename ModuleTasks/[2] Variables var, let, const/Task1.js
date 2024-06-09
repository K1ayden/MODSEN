'use strict';

function testVariablesScope() {
    {
        var xVar = 'var variable';
        let xLet = 'let variable';
        const xConst = 'const variable';

        console.log('Inside block:');
        console.log('xVar:', xVar); 
        console.log('xLet:', xLet); 
        console.log('xConst:', xConst); 
    }

    console.log('Outside block:');
    console.log('xVar:', xVar); // Доступна
    try {
        console.log('xLet:', xLet); // Ошибка
    } catch (error) {
        console.error('xLet is not accessible:', error.message);
    }
    try {
        console.log('xConst:', xConst); // Ошибка
    } catch (error) {
        console.error('xConst is not accessible:', error.message);
    }
}

testVariablesScope();
