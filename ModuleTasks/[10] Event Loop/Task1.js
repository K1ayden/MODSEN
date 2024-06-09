function delayedCallback(callback) {
    setTimeout(() => {
      callback();
    }, 2000);
  }
  
  function printMessage() {
    console.log("Сообщение выведено с задержкой!");
  }
  
  delayedCallback(printMessage);
  