

// const loginUser = (username, password) => {

//   fetch()
// }

function loginUser(event) {
  // const username = document.getElementById('Username').value;
  // const password = document.getElementById('Password').value;
  const username = document.querySelector('UserName').value;
  const Password = document.querySelector('Password').value;
  console.log('user--------->', username);
  console.log('password--------->', password);
  const loginUrl = 'http://more-recipes-25.herokuapp.com/api/v1/users/signin';
  //event.preventDefault();
  fetch(loginUrl, {
    method: 'POST',
    body: JSON.stringify({ username: username, password: password })
  }).then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
document.getElementById('loginUser').addEventListener('submit', loginUser);




