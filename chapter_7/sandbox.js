const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username')
const feedback = document.querySelector('.feedback')

form.addEventListener('submit', e => {
    e.preventDefault();
   
    // validation
  const username = form.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;

  if(usernamePattern.test(username)){
  //feedback good info
  feedback.textContent = "that username is valid!";
  } else {
      //feedback bad info
      feedback.textContent = "username not valid";
  }

});

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