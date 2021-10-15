import { foods } from './food.js';
import { renderFoodItem } from './utils.js';
// import { findById } from './utils.js';

const foodList = document.getElementById('food-list');
// const foodItem = document.querySelectorAll('.food-item');
// const foodData = findById(food.id, foodItems);

for (let food of foods){
    const foodItem = renderFoodItem(food);
    foodList.append(foodItem);
}


