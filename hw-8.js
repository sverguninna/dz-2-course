 const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
function compareUser(a, b) {
    if (a.age> b.age) {
        return 1
    } else if (a.age< b.age){
        return -1
    }else{
        return 0
    }

}
const userAge =  people.sort(compareUser)
console.log(userAge);








function isPositive(number) {
    if(number>0){
        return number
    }
    }
    function isMale(item) {
      if (item.gender = 'male') {
        return item
    }
    }
    function filter(arr, isMale) {
       const  filterPeople =[]
      for (let i = 0; i < arr.length; i++) {
        const result= isMale(arr[i])
        if (result) {
            filterPeople.push(result)
        }
      }
      return filterPeople
    }
    
    console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
    const people2 = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people2, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]


    const timer = (seconds)=>{
       const interval = setInterval(() => {
            console.log(new Date());
        }, 3000);

        setTimeout(() => {
            clearInterval(interval);
            console.log('30 секунд прошло')
          }, seconds * 1000)
    }
    timer(30)
 
    function delayForSecond( delayForSecond ) {
        setTimeout(() => {
            delayForSecond()  
        }, 5000 ); 
   }
   
   delayForSecond(function () {
      console.log('Привет, Глеб!');
   }) 

function delayForSecond(cd) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)

}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

() => {
    delayForSecond(sayHi('Глеб'))
}