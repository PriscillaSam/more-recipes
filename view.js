async function fetchTopFive(recipeId) {
    const url = `http://more-recipes-25.herokuapp.com/api/v1/recipes/${recipeId}`;
    const fetchResult = fetch(URL)
    const response = await fetchResult;
    const jsonData = await response.json();
    console.log(jsonData);
  }
  
  fetchTopFive(3);

