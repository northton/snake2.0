let food = { x: 0, y: 0 }
const expansionRate = 1

export function update () {
}

export function draw (gameBoard) {
    const foodElement = document.createElement("div")
    foodElement.style.gridRowStart = food.y //Column
    foodElement.style.gridColumnStart = food.x //Row
    foodElement.classList.add("food")
    gameBoard.appendChild(foodElement)
}