export function findById(id, items) {
    for (let item of items) {
        if (item.id === id) {
            return item;
        }
    }
}


export function renderFoodItem(food){
    const foodItem = document.createElement('li');
    foodItem.classList.add('food-item');
    foodItem.id = food.id;

    const img = document.createElement('img');
    img.src = food.img;
                
    const foodSpan = document.createElement('span');
    foodSpan.classList.add('food-name');
    foodSpan.textContent = `${food.name}`;

    foodItem.append(img, foodSpan);

    return foodItem;
}