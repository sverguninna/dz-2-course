 let str= 'Привет js'
console.log(str.toUpperCase());  



  const products= ['сыр','сырники','Сырки-молочные','сгущенка'];
let search = 'сыр'  
function searchStart(array, searchString) {
   const filteredArray = products.filter((product) => {

      if (product.toUpperCase().startsWith(searchString.toUpperCase())) {
          return true
      } else {
          return false
      }
   });

   return filteredArray
}
const searchedElements = searchStart(products, search)
console.log(searchedElements)
  
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
     arr[i]= Math.floor(Math.random()*arrLength) 
      arrLength= Math.floor(arrLength/2)

   }
  return arrLength
}
 getRandomArrNumbers(7)
 console.log(arr);
 

function wholeNumber(num1,num2) {
   wholeNumber = Math.floor(Math.random() * (num2 - num1) + num1);
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

   return MyDate + ' ' + MyTime

   console.log(MyDate, MyTime);
}
console.log(todayDate(NowDate ) );

 const button = document.getElementById('button')
const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
let message1
let message2
function WordGame () {
   for (let i = 0; i < words.length; i++) {
      word = words.sort(() => Math.random() - 0.5);
     alert(word)
     message1= prompt('чему равняеться первый элемент')
    message2= prompt('чему равняеться последний элемент')
    if (words[0].toUpperCase === message1.toUpperCase && message2.toUpperCase() === words[6].toUpperCase ) {
      alert('вы молодец')
      break
    } else if(message1.toUpperCase() !== words[0].toUpperCase || message2.toUpperCase() !==  words[6].toUpperCase) {
      alert("один неверен")
      break
    } else  if(message1.toUpperCase() !== words[0].toUpperCase && message2.toUpperCase() !== words[6].toUpperCase) {
      alert('лажа')
      break
    }
   }
   
}
  