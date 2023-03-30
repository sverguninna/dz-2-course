let password = 'Пароль';
let question = String(prompt('Введите пароль'));
let result = password === question ? alert('верно'): alert('Не верно');
 
let c = Number(prompt('Введите число'))
let check = c>=0 && c<=10 ? alert('верно'): alert('не верно');

let d = 123;
let e = 1;
if (d>=100 || e>=100) {
    console.log('верно');
} else{
    console.log('Не верно');
};

let a = 2;
let b = 3;
alert(a + b); 

let monthNumber= Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case 12 || 1 || 2:
        alert('зима');
    break;

    case 3 || 4 || 5:
       alert('весна');
    break;

    case 6 || 7 || 8:
      alert('лето');
    break;

    case 9 || 10 || 11:
        alert('осень');
    break;

    default:
        alert('такого нет ')
        break;
}; 

let questionNumber= Number(prompt("введите число"));
if (isNaN(questionNumber)===false & questionNumber%2===0
) { 
   alert('четное')
} else if (isNaN(questionNumber)===false) {
    alert('не четное ')
} else {
   alert('нет значения') 
};  

let questionPhone=confirm('Здравствуйте, добропожаловать в наш банк. Хотите воспользоваться приложением?');
(questionPhone)
let questionLink = questionPhone===true? link = Number(prompt('введите 0 если пользуетесь iOS или 1 если  Android')): alert('всего доброго');
if ( questionLink === 0) {
    alert('Установите версию приложения для iOS по ссылке»');
} else if (questionLink === 1) {
    alert('Установите версию приложения для Android по ссылке');
} else{
    alert ("невозможно устоновить приложение");
};

