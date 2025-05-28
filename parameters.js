// parameters/arguments in functions and callback functions
function morning(name){
    return 'good morning!'+name;
}
console.log(morning('hari'));
console.log(morning('ammu'));
console.log(morning('vaishu'));

function sum(n1,n2){
    return n1+n2;
}
console.log(sum(33,99));
// objects can also be passed as arguments
const person={
    name:'vaishu',
    role:'frontend engineer',
    city:'hyd'
};
function giveOutput(objectname){
    return objectname;
}
console.log(giveOutput(person));
console.log(giveOutput(person.name));
console.log(giveOutput(person.role));
console.log(giveOutput(person.city));
function Output(obj){
    return obj.city;
}
console.log(Output(person));