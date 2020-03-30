const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username')
const feedback = document.querySelector('.feedback')

const username = form.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
   
    // validation
  

  if(usernamePattern.test(username)){
  //feedback good info
  feedback.textContent = "that username is valid!";
  } else {
      //feedback bad info
      feedback.textContent = "username not valid";
  }

});

//live feedback

form.username.addEventListener('keyup', e => {
  if(usernamePattern.test(e.target.value)){
    form.username.setAttribute('class','success');
  } else {
    form.username.setAttribute('class','error');
  }
})

// const username = 'harrison909090';
// const pattern = /^[a-z]{6,}$/

// // let result = pattern.test(username);



// // if(result){
// //     console.log('regex test passed')
// // } else {
// //     console.log('regex test failed')
// // }

// let result = username.search(pattern);

// console.log(result);