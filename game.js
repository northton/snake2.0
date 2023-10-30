import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection } from "./snake.js"
import { update as updateFood, draw as drawFood } from "./food.js"
import { outsideGrid } from "./grid.js"

let request
let gameOver = false
const gameBoard = document.getElementById("game-board")
let pause = document.getElementById("pause")
let start = document.getElementById("start")
let i = 0
let score = document.getElementById("scorejs")
let time = document.getElementById("timejs")
const now = new Date();
// const dialog = document.querySelector("dialog")
// const restart = document.getElementById("restart")
// const quit = document.getElementById("quit")


start.addEventListener("click", () => {
    request = setInterval(() => {gameLoop()}, 300)
})

pause.addEventListener("click", () => {
    clearInterval(request)
    if(confirm("The game is paused!Press OK to resume")) {
        request = setInterval(() => {gameLoop()}, 300)
    } else {
        return window.location = "/"
    }
})

function gameLoop() {
    if(gameOver) {
        clearInterval(request)
        if (confirm("You lost. Press OK to restart.")) {
            window.location = "/"
        }
        return
    }
    i++
    console.log(i)
    update()
    draw()
}

function update() {
    updateFood()
    updateSnake()
    checkFailure()
}

function draw() {
    gameBoard.innerHTML = ""
    drawFood(gameBoard)
    drawSnake(gameBoard)
}

function checkFailure() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}







