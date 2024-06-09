function getLastChar(str) {
    if (str === '') {
      console.error('Пустая строка не имеет символов');
      return;
    }
  
    const lastChar = str[str.length - 1];
    console.log(lastChar);
  }

getLastChar('Привет!'); // Выведет !
getLastChar('Мир'); // Выведет 'р'
getLastChar(''); // Выведет сообщение об ошибке
  