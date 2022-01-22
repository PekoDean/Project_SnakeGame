import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'


let food = getRandomFoodPosition()
const EXPANSION_RATE = 2
let score = 0
let hiscore = 0

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
        score++
        hiscore++
        console.log("Score : " + score);
        console.log("Hi-Score : " + hiscore);
    }
}

export function draw(gameBoard) {
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')        
        gameBoard.appendChild(foodElement)
}

// RANDOMIZE FOOD POSITION
function getRandomFoodPosition() {
    let newFoodPosition 
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}
