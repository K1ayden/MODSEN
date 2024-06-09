function checkAndThrowError(number) {
    if (!Number.isInteger(number)) {
      throw new Error("Введено не целое число!");
    }
  }
  
  try {
    checkAndThrowError(5); 
    console.log("Число 5 является целым.");
  } catch (error) {
    console.error(error.message); 
  }
  
  try {
    checkAndThrowError(5.2); 
  } catch (error) {
    console.error(error.message); 
  }
  