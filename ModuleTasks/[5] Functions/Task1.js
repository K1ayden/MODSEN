function repeatOperation(operation, interval, times) {
    let count = 0;
    
    const intervalId = setInterval(() => {
        if (count < times) {
            operation();
            count++;
        } else {
            clearInterval(intervalId);
        }
    }, interval);
}

function sayHello() {
    console.log('Hello');
}

repeatOperation(sayHello, 1000, 5);
