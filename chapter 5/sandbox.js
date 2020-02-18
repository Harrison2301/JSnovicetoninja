// object literals
// const blogs = [
//     { title: ' why make and cheese is awesome', likes: 30 },
//     { title: 'fun stuff on the weekend', likes: 100}
// ];

// console.log(blogs);

let user = {
name: 'crystal',
age: 30,
email: 'crystal@email.ca',
location: 'canada',
blogs: [ { title: ' why make and cheese is awesome', likes: 30 },
{ title: 'fun stuff on the weekend', likes: 100}],
login: function(){
    console.log('the user logged in');
},
logout: function(){
    console.log('the user logged out');
},
logBlogs: function(){
    // console.log(this.blogs)
    console.log('this user has created the following blogs:')
    this.blogs.forEach(blog => {
        console.log(blog.title, blog.likes);
    })
}
};

user.logBlogs();

// user.login();
// user.logout();


// console.log(user);
// // dot notation
// console.log(user.name);

// // user.age = 35;
// console.log(user.age);

// //square bracket notation

// console.log(user['email']);

// user['name'] = 'harrison';

// console.log(user['name']);

// const key = (user['key']);

// console.log(typeof user);

// ******* Math Object

// console.log(Math)

// console.log(Math.PI)

// console.log(Math.E)

// const area = 7.7

// console.log(Math.round(area))
// console.log(Math.floor(area))
// console.log(Math.ceil(area))
// console.log(Math.trunc(area))

// // random numbers

// const random = Math.random();

// console.log(random)

// console.log(Math.round(random * 100))

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`)

// scoreOne = 60;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`)

// REFRENCE VALUES

const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = 'chun-li';
console.log(userOne, userTwo);