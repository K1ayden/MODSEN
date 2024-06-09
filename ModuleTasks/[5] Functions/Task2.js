function bubbleSort(numbers) {
    if (!Array.isArray(numbers)) {
      console.error('Необходимо ввести массив');
      return;
    }
  
    if (numbers.length === 0) {
      console.error('Массив пуст');
      return;
    }
  
    // Сортировка пузырьком
    for (let i = numbers.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (numbers[j] > numbers[j + 1]) {
          [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
        }
      }
    }
  
    return numbers;
  }
    const numbers = [5, 1, 4, 2, 3];
    const sortedNumbers = bubbleSort(numbers);
    console.log(sortedNumbers); 
  