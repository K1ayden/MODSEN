function getSumOfSquares(numbers) {

    if (!Array.isArray(numbers)) {
      console.error('Необходимо ввести массив');
      return;
    }
  
    if (numbers.length === 0) {
      console.error('Массив пуст');
      return;
    }
  
    let sumOfSquares = 0;
    for (const number of numbers) {
      sumOfSquares += number * number;
    }
  
    return sumOfSquares;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const sumOfSquares = getSumOfSquares(numbers);
  console.log(`Сумма квадратов: ${sumOfSquares}`); // Выведет: Сумма квадратов: 55
  
  const negativeNumbers = [-1, -2, -3];
  const negativeSumOfSquares = getSumOfSquares(negativeNumbers);
  console.log(`Сумма квадратов: ${negativeSumOfSquares}`); // Выведет: Сумма квадратов: 14
  