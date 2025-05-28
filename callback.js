// callback functions
// CB functions--> functions passed as arguments inside other functions
function mng(){
    console.log('good morning!');
}
function aft(name,callback){
    console.log('good afternoon ' +name);
    callback();
}
aft('ravi',mng);
// .................
function def(){
console.log('example');
}
function abc(callback){
callback();
}
abc(def);
// Arrow functions
// variable expression
const jrntr=() =>{
return 'best movie RRR';
};
console.log(jrntr());
