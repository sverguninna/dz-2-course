 function number (a , b) {
    if (a >= b ) {
        return a
    }else{
        return b 
    };
    
};
number(9 , 10);

let question = Number(prompt('Введите число'));
function checkNumber(question) {
    if (question % 2=== 0) {
        alert('Число четное')
    } else {
        alert('число не четное');
    }
}
checkNumber(question); 

 let squaring = ( b ) => { b*=2
    console.log(b);
}
squaring(3)

let squaringNew = (d) => {
    let rezult = d*=2
    return rezult
}
squaringNew(4) 

 let age = Number(prompt('Сколько вам лет?'));
function determineAge(age) {
    if (age < 0 ) {
        alert('Вы ввели не правильное значение ')
    } else if (age>=0 && age<=12) {
        alert('Привет, друг!');
    } else if (  age >= 13 ) {
        alert( 'Добро пожаловать');
    }
}
determineAge(age) 
 
 function dataVerification(f,n){
    if (isNaN(f)=== true || isNaN(n)===true) {
        console.log('одно или оба значение не являеться числом');
    } else if (isNaN(f)===false && isNaN(n)===false)  {
        return f+n 
    } 
}
dataVerification(5,10) 
 
 let  questionNumber = prompt('Ввидите число');
function squaringData(questionNumber ) {
  if ( isNaN(questionNumber)=== false && questionNumber>=0 && questionNumber<=10) {
        let mul = questionNumber*2
        alert(`${questionNumber} в квадрате ${mul}`)
  }else{
    alert('перданный параметр не являеться числом ')
  };
    
} 
squaringData(questionNumber)


let circle1 = {
    radius: 5,
    getArea: function() {
     return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
     return 2 * Math.PI * this.radius;
    }
   };
   
   let circle2 = {
    radius: 10,
    getArea: function() {
     return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
     return 2 * Math.PI * this.radius;
    }
   };
   
   console.log(circle1.getArea()); // 78.53981633974483
   console.log(circle1.getPerimeter()); // 31.41592653589793
   console.log(circle2.getArea()); // 314.1592653589793
   console.log(circle2.getPerimeter()); //62.83185307179586
   

 const button = document.getElementById('btn');
 
let questionMonths 
btn.onclick = function checkingSeasons  () {
     questionMonths = Number(prompt('Введите номер месяца'));
    if (questionMonths === 12 || questionMonths===1 || questionMonths=== 2) {
        alert('Зима')
    } else if (questionMonths === 3 || questionMonths=== 4 || questionMonths=== 5) {
        alert('Весна')
    } else if (questionMonths === 6 || questionMonths=== 7 || questionMonths=== 8) {
        alert('Лето')
    } else if (questionMonths === 9 || questionMonths=== 10 || questionMonths=== 11) {
        alert('Лето')
    }else if (isNaN(questionMonths)===true && questionMonths<=0 || questionMonths>=13) {
         alert('Вы ввели не правильное значение')
    }
}
checkingSeasons() 