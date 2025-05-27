// objects -->collection of key-value pairs
const arr = ['raichu', 'charizard', 'venusaur', 'blastoise'];
console.log(arr[1]);


const obj = {
    firstname: 'kommuri',
    lastname: 'vaishnavi',
    age: 20,
    siblings: ['vijaya', 'ram', 'ganesh'],
    obj2: {
        villan: 'joker',
        hero: 'batman',
        hobbies: ["killing", "give trauma to hero"],
        skills: {
            n1: 'laughter',
            n2: "planner",
            n3: {
                indoor:'chess'
            }
        }
    }
}
// we can acces values using Dot Notation
// we print value with the help of key's not indexes
console.log(obj.firstname);
console.log(obj.lastname);
console.log(obj.age);
console.log(obj.siblings[1]);
console.log(obj.siblings);
console.log(obj.obj2.hero);
console.log(obj.obj2.villan);
console.log(obj.obj2.hobbies[1]);
console.log(obj.obj2.skills.n3.indoor);
console.log(obj["age"]);

// ---------------------------------------------
const person={
    name:'vijay',
    city:'hyd',
    age:29
};
// using dot notation we can access the values and also chnage
person.name='vijaya';
person.city='gud';
person.age=17;
console.log(person);
delete person.age;
console.log(person);