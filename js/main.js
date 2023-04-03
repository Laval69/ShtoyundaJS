let str = "";

for (let i = 10; i <= 20; i++) {
  str += i;
  if (i < 20) {
    str += ", ";
  }
}
console.log(str);

let kva = "";
for (let i = 10; i <= 20; i++) {
  kva += i * i;
  if (i < 20) {
    kva += ", ";
  }
}
console.log(kva);


let proiz = 1;

for (let i = 15; i <= 35; i++) {
  proiz  *= i;
}
console.log(proiz);


let sum = 0;

for (let i = 1; i <= 500; i++) {
  sum += i;
}
const aref = sum / 500;
console.log(aref);

let suma = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    suma += i;
  }
}
console.log(suma);

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

const num = prompt('Введите число'); // замените на любое целое число для проверки

if (num < 2) {
  alert(`${num} - составное число`);
} else {
  let isPrime = true;
  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  
  if (isPrime) {
    alert(`${num} - простое число`);
  } else {
    alert(`${num} - составное число`);
  }
}
