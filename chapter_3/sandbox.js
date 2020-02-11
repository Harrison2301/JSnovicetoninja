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
const password = 'pass@ssss';

if(password.length >= 12 && password.includes('@')){
    console.log('that is a strong password')
}else if (password.length >= 8 || password.includes('@')){
    console.log('that password is strong enough')
} else {
    console.log("this password is not strong enough")
}