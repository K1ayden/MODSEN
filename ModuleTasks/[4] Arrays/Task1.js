function increaseNumbersBy10Percent(numbers) {

    if (!Array.isArray(numbers)) {
      console.error('Необходимо ввести массив');
      return;
    }
  
    if (numbers.length === 0) {
      console.error('Массив пуст');
      return;
    }
  
    const modifiedNumbers = numbers.map(number => number * 1.1);
  
    return modifiedNumbers;
  }
  
  const numbers = [10, 20, 30];
  const modifiedNumbers = increaseNumbersBy10Percent(numbers);
  console.log(modifiedNumbers); // Выведет: [11, 22, 33]
  
  increaseNumbersBy10Percent([]); // Выведет: Массив пуст
  