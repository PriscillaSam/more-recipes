function postData(evt) {
    evt.preventDefault();

    const firstname = document.getElementById('recipe-fname').value;
    const lastname = document.getElementById('recipe-lname').value;
    const username = document.getElementById('recipe-uname').value;
    const email = document.getElementById('recipe-email').value;
    const password = document.getElementById('recipe-pass').value;

    console.log(username);
    fetch('http://more-recipes-25.herokuapp.com/api/v1/users/signup', {
        method: 'POST',
        headers : new Headers(),
        body:JSON.stringify({firstname: firstname, lastname: lastname, username: username, email: email, password: password })
    }).then((res) => res.json())
    .then((data) =>  console.log(data))
    .catch((err)=>console.log(err))
}
document.getElementById('postData').addEventListener('submit', postData);
