const api = 'https://www.themealdb.com/api/json/v1/1/search.php?s';


const getMealData = meal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if(data.meals == null){
            alert("food not found")
        }
        else
            displayMeals(data.meals[0])
    })
}

const displayMeals = food =>{

    const mealName = document.getElementById('MealName');
    const mealDetails = document.createElement('div');
    mealDetails.className = 'meals'
    mealDetails.innerHTML = `
    <button onClick='detailsOfFood("${food.strMeal}")'>
    <img src = "${food.strMealThumb}">
    <h3 class="foods-name">${food.strMeal}</h3>
    </button>
    `
    mealName.appendChild(mealDetails);
    
}

const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputMeal = document.getElementById('meal').value;
    getMealData(inputMeal)
})

const detailsOfFood = details =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${details}`;
    fetch(url)
    .then(res => res.json())
    .then(data => renderMealsName(data.meals[0]))
}

const renderMealsName = foods =>{
    const mealsDetails = document.getElementById('mealsDetails');
    mealsDetails.innerHTML = `
    <img src = "${foods.strMealThumb}">
    <h1 class="foods-name">${foods.strMeal}</h1>
    <h3>Ingredient</h3>
    <li class="list">${foods.strIngredient1}</li>
    <li class="list">${foods.strIngredient2}</li>
    <li class="list">${foods.strIngredient3}</li>
    <li class="list">${foods.strIngredient4}</li>
    <li class="list">${foods.strIngredient5}</li>
    <li class="list">${foods.strIngredient6}</li>
    <li class="list">${foods.strIngredient7}</li>
    <li class="list">${foods.strIngredient8}</li>
    `
}

