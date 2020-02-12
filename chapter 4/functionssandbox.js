// //function expression -not hoisted

// const speak = function(){
// console.log('good day')
// };

// greet();

// speak();

// //function declaration -hoisted
// function greet(){
//     console.log('hello there');
// }

//arguments & parameters

// //parameters
// const speak = function(name = 'no-named fool', time = 'wheres the time silly'){
//     console.log(`good ${time} ${name}`);
// };


//  //argument
// speak('harrison', 'morning');
// speak();

// returning values 

// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
// }

// const area = calcArea(5);

// console.log(area)


 // arrow function

//  const calcArea = radius => 3.14 * radius**2;

//   const area = calcArea(5);

// console.log(area)
 

// const name = "harrison";

// // functions
// const greet = () => 'hello';

// let resultOne = greet();

// console.log(resultOne)

// //methods

// let resultTwo = name.toUpperCase()

// console.log(resultTwo);


//callbacks and foreach -normal functions we pass into other functions as an argument

// let people = ['mario', 'luigi', 'ryu', 'harrison', 'chun-li'];


// const logPerson = (person, index) => {
//     console.log(`${index} hello ${person}`);
// }
// people.forEach(logPerson)

// people .forEach(function(value, index){
//     console.log(value, index);
// });


// const myFunc = (callbackFunc) => {
//     //do something 
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(value => {
//     //do something
//     console.log(value);
// });