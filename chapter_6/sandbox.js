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

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    para.innerText += ', this has been updated'
})

const content = document.querySelector('.content');

content.innerHTML = '<h2> this is a new H2!!!! </h2>'



// *************************
const people = [
    'mario', 'luigi', 'harrison'
]

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
})