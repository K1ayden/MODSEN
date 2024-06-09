function getSumOfFirstHalf(numbers) {
    
    if (!Array.isArray(numbers)) {
      console.error('Необходимо ввести массив');
      return;
    }
  
    if (numbers.length === 0) {
      console.error('Массив пуст');
      return;
    }
  
    const middleIndex = Math.floor(numbers.length / 2);
  
    let sum = 0;
    for (let i = 0; i < middleIndex; i++) {
      sum += numbers[i];
    }
  
    return sum;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const sum = getSumOfFirstHalf(numbers);
  console.log(`Сумма первой половины: ${sum}`); // Выведет: Сумма первой половины: 6
  
  const oddNumbers = [1, 2, 3, 4, 5, 6];
  const oddSum = getSumOfFirstHalf(oddNumbers);
  console.log(`Сумма первой половины: ${oddSum}`); // Выведет: Сумма первой половины: 15
  