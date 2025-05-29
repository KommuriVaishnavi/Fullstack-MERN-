// ES6 (2015) features
// === operator--> strictly equal operator
const n1=1;
const n2=1;
console.log(typeof n1);
console.log(typeof n2);
if(n1==n2){
    console.log('answer is correct');
}
else{
    console.log('answer is wrong');
}
// -------------------------
const num1=1;
const num2='1';
console.log(typeof num1);
console.log(typeof num2);
// === checks both value and datatype
// meanwhile == does not check data type it only checks value
if(num1===num2){
    console.log('answer is correct');
}
else{
    console.log('answer is wrong');
}
// -----------------------------------------------
// 2) destructuring
//  means unpacking/accessing values in an easy manner
// destructuring in arrays
const fruits=['apple','kiwi','mango','gua'];
// normal way of accessing in arrays
console.log(fruits[1]);
const someFruit=fruits[2];
console.log(someFruit);
// syntax--> const[]=array name
const[x,y,z,w]=fruits;
console.log(x);
console.log(y);
console.log(z);
console.log(w);

// destructing in objects
const person={
    name:'shaik',
    role:'rust dev',
    city:'hyd',
    skills:{
        one:'chess',
    },
}
const {name,role,city}=person;
console.log(name);
console.log(role);
console.log(city);
// console.log(name.toUppercase());
const {
    name:fName,
    role,
    city,
    skills:{one},
}=person;
console.log(fName);
console.log(role);
console.log(city);










