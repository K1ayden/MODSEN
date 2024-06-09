function sequentialAsyncOperations(operations) {
    return new Promise((resolve, reject) => {
        function executeNext(index) {
            if (index >= operations.length) {
                resolve();
                return;
            }

            const operation = operations[index];
            operation()
                .then(() => {
                    executeNext(index + 1);
                })
                .catch((error) => {
                    reject(error);
                });
        }
        executeNext(0);
    });
}

async function asyncOperation1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Асинхронная операция 1 выполнена");
            resolve();
        }, 1000);
    });
}

async function asyncOperation2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Асинхронная операция 2 выполнена");
            resolve();
        }, 1500);
    });
}

async function asyncOperation3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Асинхронная операция 3 выполнена");
            resolve();
        }, 2000);
    });
}

const operations = [asyncOperation1, asyncOperation2, asyncOperation3];

sequentialAsyncOperations(operations)
    .then(() => {
        console.log("Все асинхронные операции завершены");
    })
    .catch((error) => {
        console.error("Ошибка:", error);
    });
