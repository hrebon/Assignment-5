


const getMealData = meal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if(data.meals == null){
            alert("food not found")
        }
        else
            displayMeals(data.meals)
    })
}

const displayMeals = food =>{
    const mealName = document.getElementById('MealName');
    food.forEach(foods => {
        const mealDetails = document.createElement('div');
        mealDetails.className = 'meals'
        mealDetails.innerHTML = `
        <div onClick='detailsOfFood("${foods.strMeal}")'>
        <img src = "${foods.strMealThumb}" class="shadow  bg-white rounded">
        <h3 class="foods-name">${foods.strMeal}</h3>
        </div>
    `
    mealName.appendChild(mealDetails);
    });
        
    
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

const renderMealsName = foodDescribe =>{
    const mealsDetails = document.getElementById('mealsDetails');
    mealsDetails.innerHTML = `
    <img src = "${foodDescribe.strMealThumb}">
    <h1 class="foods-name">${foodDescribe.strMeal}</h1>
    <h3>Ingredients</h3>
    <li class="list">${foodDescribe.strIngredient1}</li>
    <li class="list">${foodDescribe.strIngredient2}</li>
    <li class="list">${foodDescribe.strIngredient3}</li>
    <li class="list">${foodDescribe.strIngredient4}</li>
    <li class="list">${foodDescribe.strIngredient5}</li>
    <li class="list">${foodDescribe.strIngredient6}</li>
    <li class="list">${foodDescribe.strIngredient7}</li>
    <li class="list">${foodDescribe.strIngredient8}</li>
    `
}


