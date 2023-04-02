 let hello=0;
while (hello < 2) {
    console.log("привет");
    hello++   
};

let number= 1;
while (number<=5) {
    console.log(number);
    number++
};

let c = 7;
while (c>=7 && c<=22) {
    console.log(c);
    c++
}; 

 const user ={
     Kolya: 200,
     Vasya: 300,
     Petya: 400,

}


for (let salary in user) { 
    alert(`${salary} — зарплата ${user[salary]}`)
}; 

let n =1000; 
let num= 0;
while (num<5) {
    n/=2
    console.log(n);
    num++
}