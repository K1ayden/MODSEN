async function generateRandomPromise() {
    const randomNumber = Math.floor(Math.random() * 10) + 1; 
    const delaySeconds = randomNumber; 
  
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (randomNumber <= 5) {
          resolve(`Успех! Сгенерировано число: ${randomNumber}`);
        } else {
          reject(`Ошибка! Сгенерировано число: ${randomNumber}`);
        }
      }, delaySeconds * 1000); 
    });
  }
  
  generateRandomPromise()
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
  