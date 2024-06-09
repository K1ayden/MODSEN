function getSumFirstAndLastDigit(number) {
    if (typeof number !== 'number') {
      console.error('Необходимо ввести число');
      return;
    }
  
    const stringNumber = number.toString();

    const firstDigit = parseInt(stringNumber[0]);
    const lastDigit = parseInt(stringNumber[stringNumber.length - 1]);
    const sum = firstDigit + lastDigit;
  
    console.log(`Сумма первой и последней цифры ${number}: ${sum}`);
  }
  
  getSumFirstAndLastDigit(123);
  getSumFirstAndLastDigit(-123); 
  getSumFirstAndLastDigit('123abc'); 
  