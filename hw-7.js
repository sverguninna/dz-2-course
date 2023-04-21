let str= 'Привет js'
console.log(str.toUpperCase()); 



  const products= ['сыр','сырники','Сырки-молочные','сгущенка'];
let search = 'сыр'  
let productNew= [];
products.forEach((product) => {
   let productNew = products.map(product =>(product.toUpperCase().startsWith(search.toUpperCase()))) 
   console.log(productNew); 
});  
  
 let number= 32.58884
console.log(Math.ceil(number));
console.log(Math.floor(number));
console.log(Math.round(number)); 



const array =[52, 53, 49, 77, 21, 32]
console.log(Math.max(...array), Math.min(...array));
 



 function random (params) {
    console.log(Math.floor( Math.random()*10));
}
random() 



 let arr =[]
function getRandomArrNumbers(arrLength) { 
   for (let i = 0; i < arrLength; i++) {
     arr[i]= Math.floor(Math.random()*10) 
    arr = Math.floor(arrLength/2)
   }

}
getRandomArrNumbers(7)
 console.log(arr);
 

  function wholeNumber(num1,num2) {
    wholeNumber = Math.random()*num1*num2 
    console.log(wholeNumber);
}
wholeNumber(1, 10) 

let currentDate = new Date();
console.log(currentDate); 

let MyDate= new Date()
console.log(MyDate);
 MyDate.setDate(MyDate.getDate()+73)
console.log(MyDate);  

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let NowDate= new Date()
function todayDate(NowDate) {
   MyDate= 'Дата:'+ NowDate.getDate() + months[NowDate.getMonth()] + NowDate.getFullYear() + days[NowDate.getDay()]
   MyTime= 'время:'+NowDate.toTimeString()
   console.log(MyDate, MyTime);
}
todayDate(NowDate, ) 

const button = document.getElementById('game')
const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
let message
WordGame() 
game.onclick = function WordGame () {
   for (let index = 0; index < words.length; index++) {
      words = words.sort(() => Math.random() - 0.5);
     alert(words)
   }
   
}
 