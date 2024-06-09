function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
      throw new Error("Деление на ноль невозможно!");
    }
    return numerator / denominator;
  }
  
  try {
    const result = divideNumbers(10, 2);
    console.log(`Результат деления: ${result}`); 
  } catch (error) {
    console.error(error.message); 
  }
  
  try {
    divideNumbers(5, 0); 
  } catch (error) {
    console.error(error.message); 
  }
  