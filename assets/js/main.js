let allRecipes = [];
const url = `http://more-recipes-25.herokuapp.com/api/v1/recipes`;
let allRe = document.querySelector('.all-recipes');
// let each = document.querySelector
fetch(url)
.then((data)=>{
  return data.json();
})
.then((result)=>{
  return result.data.recipes;
})
.then((recipes)=>{
  console.log(recipes);
  recipes.forEach((recipe)=>{
    let title = document.createElement('h2');
    let des = document.createElement('h5');
    let container = document.createElement('div');
    container.className  = "con";
    title.className = "item";
    des.className = "des";
    title.innerText = `${recipe.title}`;
    des.innerText = `${recipe.description}`;
    allRe.appendChild(container);
    container.appendChild(title);
    container.appendChild(des);
  });
})
.catch((err)=>{
  alert('error fetching receipes');
});