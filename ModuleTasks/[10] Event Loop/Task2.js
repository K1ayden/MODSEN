async function fetchDataWithTimeout(url, timeoutMs) {
    const controller = new AbortController();
    const signal = controller.signal;
  
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  
    try {
      const response = await fetch(url, { signal });
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      const data = await response.json();
      clearTimeout(timeoutId);
      return data;
    } catch (error) {
      clearTimeout(timeoutId);
      console.error(`Ошибка запроса: ${error.message}`);
      return null; 
    }
  }
  
  const url = "https://api.example.com/data";
  const timeoutMs = 5000; 
  
  fetchDataWithTimeout(url, timeoutMs)
    .then((data) => {
      if (data) {
        console.log("Данные получены:", data);
      } else {
        console.error("Запрос отменен из-за таймаута");
      }
    })
    .catch((error) => console.error("Произошла ошибка:", error));
  