 const number =[1, 5, 4, 10, 0, 3];
for (let i = 0; i< number.length; i++) {
    if (number[i] == 10) {
        break;
       
    }
    console.log(number[i]);
} 


  const arre =[1, 5, 4, 10, 0, 3];
 arre.forEach((element, index) => {
 if (element === 4) {
    console.log(`${element}: ${index}`);
 }    
});
 

 let num1 =[ 1, 3, 5, 10, 20];
 num1 = num1.join(' ');
 console.log( num1 ); 

  let boxNumber= [];
 for (index = 0; index < 3; index++) {
    boxNumber[index] =[];

    for ( element  = 0; element <3 ; element++) {
       boxNumber[index].push(1);
        
    }
 }
 console.log(boxNumber);
 
 const number5 =[1, 1, 1]
number5.push(2,2,2)
console.log(number4); 

 let number6 =  [9, 8, 7, 'a', 6, 5];
number6.sort()
console.log(number6);
number6.pop()
console.log(number6); 

  const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let question =Number(prompt('Введите число от 1 до 10 '));

for (let i = 0; i < Array.length; i++) {
   if ( Array[i]== question) {
      alert('Тaкое значение есть ')
      break
   } else {
     alert('Такого значения нет')
     break
   }
    
} 

 let string = 'abcdef'
 const arr = Array.from(string);
 console.log(arr.reverse);
 console.log(arr.join(''));

 

  /* задание 9???? */ 

const plus= [ 1, 4, 2, 2, 4, 6, 1, 5, 7, 1];
for (let i = 0; i < plus.length; i++) {
   let result= plus[i+1]+plus[i]
    console.log(result);
}

const num= [2,4,5,1,4,7,9,8]
function numberSquared(num) {
   let result2 = num.map(item=>(item*2))
console.log(result2); 
}
numberSquared(num)

 const getLengthWords =['слово', '', 'слог', 'длинное предложение', 'буква'];
let lengthOneWords =[]
function createArray( getLengthWords) {
    let s = getLengthWords.map(item=>(item.split('')))
    console.log(s);
    lengthOneWords= s.map(el=>el.length)
    return lengthOneWords
}
createArray(getLengthWords)
console.log(lengthOneWords);
 

const n = [-2, 3, 4,-5, 5, -6 ]
let r =[]
arrayFilter(n)
function arrayFilter(n ) {
  r = n.filter(el=>el<=0) 
   return r
}
console.log(r);

