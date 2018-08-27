const form = document.getElementById('recipe-form');
const btn = document.getElementById('addRecipe');
const responseDiv = document.getElementById('resDiv');

const title = document.getElementById('title').value;
const category = document.getElementById('category').value;
const description = document.getElementById('description').value;
const preparationTime = document.getElementById('prepTime').value;
const ingredients = document.getElementById('ingredients').value;
const directions = document.getElementById('directions').value;
const recipeImage = document.getElementById('image').value;
const pRes = document.getElementById('dataRes');

const addUrl = 'http://more-recipes-25.herokuapp.com/api/v1/recipes';

const recipeData = {
  
    title,
    category,
    description,
    preparationTime,
    ingredients,
    directions,
    recipeImage
};

const addRecipe = (url, data) => {

  fetch(url, {
    method: 'POST',
    // mode: 'cors',
    headers: {
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxOX0sImlhdCI6MTUzNTM3NTc4NywiZXhwIjoxNTM1NDYyMTg3fQ.vhEYF2AS7KpBxP41Z6j9Jibo9BWgv6pKfGZwqGWlWvQ'
    },
    body: JSON.stringify(data),
  })
  .then((response) => {
    responseDiv.classList.remove('hidden');
    pRes.innerHTML = response.message;
  })
  .catch((error) => {
    responseDiv.classList.remove('hidden');
    pRes.innerHTML = error;

  });
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addRecipe(addUrl, recipeData);
});