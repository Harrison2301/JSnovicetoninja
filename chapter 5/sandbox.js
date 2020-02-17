// object literals

let user = {
name: 'crystal',
age: 30,
email: 'crystal@email.ca',
location: 'canada',
blogs: ['why mac and cheese is awesome', 'fun stuff on the weekend']
};

console.log(user);
// dot notation
console.log(user.name);

// user.age = 35;
console.log(user.age);

//square bracket notation

console.log(user['email']);

user['name'] = 'harrison';

console.log(user['name']);

const key = (user['key']);

console.log(typeof user);
