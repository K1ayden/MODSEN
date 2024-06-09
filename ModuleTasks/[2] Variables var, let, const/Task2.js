var x = 10; 
function myFunction() {
  var x = 20; 
  console.log(x); 
}

console.log(x); // Выведет 10 (глобальная переменная x)
myFunction();
console.log(x); // Выведет 10 (глобальная переменная x)
