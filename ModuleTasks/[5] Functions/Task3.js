function findFirstUniqueChar(string) {
   
    if (typeof string !== 'string') {
      console.error('Необходимо ввести строку');
      return '';
    }
  
    const charCounts = {};
  
    for (let i = 0; i < string.length; i++) {
      const char = string[i].toLowerCase();
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
  
    for (let i = 0; i < string.length; i++) {
      const char = string[i].toLowerCase();
      if (charCounts[char] === 1) {
        return string[i]; 
      }
    }
  
    return '';
  }
  
  const string1 = 'modsen';
  console.log(findFirstUniqueChar(string1)); 
  
  const string2 = 'loveleetcode';
  console.log(findFirstUniqueChar(string2)); 
  
  const string3 = 'aabbcc';
  console.log(findFirstUniqueChar(string3)); // Выведет: '' (нет неповторяющихся символов)
  