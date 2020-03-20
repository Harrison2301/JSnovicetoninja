// //selector tip -> you can right click and select inspect, in elements tab you can right click to copy selector 
// // const para = document.querySelector('div.error');

// // console.log(para);

// const paras = document.querySelectorAll('p');

// // paras.forEach(para => {
// //     console.log(para);
// // })
// const errors = document.querySelectorAll('.error')
// console.log(errors);

//element by id
// const title = document.getElementById('page-title');
// console.log(title)

// //element by class name

// const errors = document.getElementsByClassName('error');
// console.log(errors)
// console.log(errors[0])

// //get element by tag name

// const paras = document.getElementsByTagName('p');
// console.log(paras)
// console.log(paras[0]);

// using queryselector or selector all is great because its simple and you are able to use for each 

// const para = document.querySelector('p')

// para.innerText += ', this has been updated';

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     para.innerText += ', this has been updated'
// })

// const content = document.querySelector('.content');

// content.innerHTML = '<h2> this is a new H2!!!! </h2>'



// // *************************
// const people = [
//     'mario', 'luigi', 'harrison'
// ]

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`
// })

// const link = document.querySelector('a')

// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'https://www.github.com');
// link.innerText = 'Github'

// const message = document.querySelector('p');

// console.log(message.getAttribute('class'));

// message.innerText = 'success'

// // message.setAttribute('style', 'margin: 50px');

// //change style rather then set attribute to avoid over riding
// message.style.margin = '50px';
// message.style.color = 'crimson';
// message.style.fontSize = '60px';
// message.style.color = ''

// const content = document.querySelector('p');

// console.log(content.classList);

// content.classList.add('error')
// content.classList.remove('error')
// content.classList.add('success');

// const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//    if(p.textContent.includes('error')){
//        p.classList.add('error');
//    } 
//    if(p.innerText.includes('success')){
//        p.classList.add('success')
//    }
// });
// const article = document.querySelector('article');


// // Array.from(article.children).forEach(child => {
// // child.classList.add('article-element');
// // });

// const title = document.querySelector('h2');

// console.log(title.parentElement)
// console.log(title.parentElement.parentElement)
// console.log(title.nextElementSibling)
// console.log(title.previousElementSibling)

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('you clicked me')
// })
const ul = document.querySelector('ul');

// const items = document.querySelectorAll('li');

const button = document.querySelector('button');

button.addEventListener('click', () => {
const li = document.createElement('li');
li.textContent = 'something new to do';
ul.append(li);
});

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         // e.target.style.textDecoration = 'line-through'
//         console.log('event in li')
//         e.stopPropagation();
//         e.target.remove();
//     }) 
// })

ul.addEventListener('click', e => {
    // console.log('event in UL')
    // console.log(e.target)
    e.target.remove()
})