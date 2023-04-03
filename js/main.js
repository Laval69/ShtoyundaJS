//ДЗ 5 по Роминому подсчету

const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sum = 0;
let positiveNum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    positiveNum++;
  }
  sum += arr[i];
}
// arr.forEach(function(elem) {  
//     if(elem > 0){
//       sum += elem
//       positiveNum++
//     }
//   });
console.log("Сума елементов массива: " + sum);
console.log("Позитивные елементы " + positiveNum);


let min = arr[0];
let minIndex = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
    minIndex = i;
  }
}

console.log(`Минимальный елемент: ${min}`);
console.log(`Порядковый номер елемента: ${minIndex}`);

let max = arr[0];
let maxIndex = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    maxIndex = i;
  }
}

console.log(`Максимальный елемент: ${max}`);
console.log(`Порядковый номер елемента: ${maxIndex}`);


let negative = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    negative++;
  }
}

console.log(`Количество негативних елементов: ${negative}`);


let numOdd = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 !== 0) {
    numOdd++;
  }
}

console.log(`Количество непарних позитивних елементов: ${numOdd}`);

let numEven = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 === 0) {
    numEven++;
  }
}

console.log(`Количество парних позитивних елементов: ${numEven}`);



let sumEven = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 === 0) {
    sumEven += arr[i];
  }
}

console.log(`Сума парних позитивних елементов: ${sumEven}`);



let sumOdd = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 !== 0) {
    sumOdd += arr[i];
  }
}

console.log(`Сума непарних позитивних елементів: ${sumOdd}`);

let product = 1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    product *= arr[i];
  }
}

console.log(`Произведение позитивних елементов: ${product}`);


const newArr = arr.map(elem => {

  if (elem !== max) {
      return 0;
  } else {
      return elem;
  }
});
console.log(`Обновленный массив ${newArr}`);
