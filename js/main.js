// let User = prompt("What is your namе");
// alert (`Hello, ${User}! How are you?`);

let name = prompt('Как вас зовут?');
let surname = prompt ('Ваша фамилия?'); 
let age = prompt ('Сколько вам лет?');
let city = prompt('Из какого вы города?');

// age = Number(age);

let user = {
  name: name,
  surname: surname,
  age:  Number(age),
  city: city,
}
confirm ("Разрешаете ли вы использовать свои данные?") ?
console.log(`Имя пользовалтеля, ${user.name}\n Фамилия, ${user.surname}\n Возвраст, ${user.age}\n Город, ${user.city}`) 
: alert('Показ данных запрещен')

