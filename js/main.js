//ДЗ 7 по Роминому счету

function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);


function generateKey(length, characters) {
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key);


function removeChars(str, charsToRemove) {
  const charArray = str.split("");
  
  const filteredArray = charArray.filter(char => !charsToRemove.includes(char));
  
  return filteredArray.join("");
}

const result = removeChars(" hello world", ['l', 'd']);
console.log(result);



function getSum() {
  let sum = 0;
  return function(num) {
    sum += num;
    return sum;
  }
}

const sum = getSum();

console.log(sum(3));
console.log(sum(5)); 
console.log(sum(20));
