function fetchFromMultipleAPIs(apiUrls) {
    const promises = apiUrls.map(url => {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Ошибка запроса к ${url}: ${response.statusText}`);
                }
                return response.json();
            });
    });

    return Promise.all(promises)
        .then(results => {
            return results.reduce((mergedResult, result) => {
                return Object.assign(mergedResult, result);
            }, {});
        });
}

const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

fetchFromMultipleAPIs(apiUrls)
    .then(combinedResult => {
        console.log("Объединенный результат:", combinedResult);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
