// // if statements
// const age = 25;

// if(age > 20){
//     console.log('you are over 20 years old')
// }

// const ninjas = ['harrison', 'ryu', 'chun-li', 'yoshi']

// if(ninjas.length > 4){
//     console.log("that is a lot of ninjas")
// }

// else if statement
// const password = 'pass@ssss';

// if(password.length >= 12 && password.includes('@')){
//     console.log('that is a strong password')
// }else if (password.length >= 8 || password.includes('@')){
//     console.log('that password is strong enough')
// } else {
//     console.log("this password is not strong enough")
// }

// logical NOT(!)
// let user = false;

// if(!user){
// console.log('you must be logged in to continue')
// }
// console.log(!true)
// console.log(!false)

// break and continue 

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){

//     if(scores[i] === 0){
//         continue;
//     }

//     console.log('your score: ', scores[i]);

//     if(scores[i] === 100){
//         console.log('congrats, top score!')
//         break;
//     }
// }

// switch statements

// const grade = 'A';

// switch(grade){
//     case 'A':
//         console.log('You got an A');
//         break;
//         case 'A':
//                 console.log('You got an A');
//         break;
//         case 'B':
//                 console.log('You got an B');
//         break;
//         case 'C':
//                 console.log('You got an C');
//         break;
//         case 'D':
//                 console.log('You got an D');
//         break;
//         default:
//                 console.log('not a valid grade');
// }

//variables and block statemnts

// global scope
// let age = 23;

// if(true){
// console.log('inside code block', age);
// }

// console.log('outside code block', age);


//local scope - block scope
const age = 23;

if(true){
let age = 40;
let name = 'harrison'
console.log('inside code block', age, name);

if(true){
    let age = 100;
    console.log('inside second code block', age);
}
}

console.log('outside code block', age);