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








function isPositive() {
    // писать код тут
    }
    function isMale() {
    // писать код тут
    }
    function filter() {
    // писать код тут
    }
    
    console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
    const people2 = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people2, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]