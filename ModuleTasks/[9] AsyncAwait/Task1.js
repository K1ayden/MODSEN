async function fetchDataFromRemoteServer(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        throw error;
    }
}

const url = 'https://jsonplaceholder.typicode.com/posts/1';
(async () => {
    try {
        const data = await fetchDataFromRemoteServer(url);
        console.log('Полученные данные:', data);
    } catch (error) {
        console.error('Ошибка:', error);
    }
})();
