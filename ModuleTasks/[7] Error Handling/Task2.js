function accessProperty(obj) {
    try {
        return obj.undefinedProperty;
    } catch (error) {
        if (error instanceof TypeError) {
            console.error('Произошла ошибка TypeError:', error.message);
            return 'Ошибка: ' + error.message;
        } else {
            throw error;
        }
    }
}


const obj = {};
console.log(accessProperty(obj)); // Выведет сообщение об ошибке TypeError
