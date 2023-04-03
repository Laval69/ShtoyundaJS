let NumOne = prompt("Введите первое число");
let NumTwo = prompt("Введите второе число");
let NumThree;
let NumFour;
let result;

if(NumOne === '' ){
  NumOne = 0;
}
if (NumTwo === '') {
  NumTwo = 22;
}

alert(`Число Один ${NumOne}`);
alert(`Число Два ${NumTwo}`);

if( NumOne & NumTwo == true){
  NumThree = 80;
}
else { 
  NumThree = 40;
};
alert(`Число Три ${NumThree}`);

if(NumOne <= 90 ){
}

let obj = {
  size: 'medium',
}
if(NumOne >= 90 )
{
  obj.size = 'big';
}
else if(NumOne <= 40){
  obj.size = 'small';
}

alert(`Размер первого числа имеет значение ${obj.size}`);

switch(obj.size){
  case 'big':
    NumFour = 1000;
    break;
  case 'medium':
    NumFour = 100;
    break;
  case 'small':
    NumFour = 10;
    break;
}
alert(`Число четыри ${NumFour}`);

result = NumOne * NumTwo * NumThree * NumFour

if (result % 2 === 0){
  console.log(result,"XD");
}
else{
  NumTwo > 50
  alert(`Число два больше 50 и равно ${NumTwo}`)
}

