async function fetchContentFromUrls(urls) {
    try {
      const results = await Promise.all(
        urls.map(async (url) => {
          const response = await fetch(url);
          const text = await response.text();
          return { url, text }; 
        })
      );
      return results;
    } catch (error) {
      console.error(error);
    }
  }
  
  const urls = [
    "https://www.youtube.com/watch?v=ck-b_28PMM8",
    "https://www.youtube.com/watch?v=LYXAjFJTLeM",
    "https://www.youtube.com/watch?v=iuYfjlC2wqg",
  ];
  
  fetchContentFromUrls(urls)
    .then((results) => {
      console.log(results); 
    })
    .catch((error) => console.error(error));
  