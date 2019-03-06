const formDiv = document.getElementById("form");
const submitButton = document.getElementById("submitButton")
let nameValue = document.getElementById("nameInput");
const gameDiv = document.getElementById("game")

function greetUser() {
    let userName = prompt("Hello, please enter your name: ")
    alert (`Hello ${userName}! To play simply answer the JavaScript questions below. Good luck!`)
    
}

function startGame() {
    greetUser()
}

startGame()

const formSubmit = function(e) {
    console.log("click")
    submitButton.addEventListener("click", formSubmit)
 
}

nameValue=document.getElementById("nameInput")


gameDiv.style.display="block"    

  
// DOM
let q1Text = document.getElementById('questionOne')
let q1Btn = document.querySelector('#submitQ1')

let q2Text = document.getElementById('questionTwo')
let q2Btn = document.querySelector('#submitQ2')

let q3Text = document.getElementById('questionThree')
let q3Btn = document.querySelector('#submitQ3')

let q4Text = document.getElementById('questionFour')
let q4Btn = document.querySelector('#submitQ4')

let q5Text = document.getElementById('questionFive')
let q5Btn = document.querySelector('#submitQ5')

let q6Text = document.getElementById('questionSix')
let q6Btn = document.querySelector('#submitQ6')

function checkQ1() {
    console.log(q1Text)
    if (q1Text.value == "hello" || "Hello" || "HELLO"|| "HEllo"){
        alert('Correct! On to the next question')
    } else { 
        alert('Close! Better luck on the next question')
    }
}

function checkQ2() {
    if (q2Text.value == "Bye" || "BYE" || "bye" || "BYe"){
        alert('Correct!')
    } else {
        alert('Close! The answer is bye. Better luck on the next question')
    }
}

function checkQ3() {
    if (q3Text.value == "Functions" || "functions" || "FUNCTIONS" || 'FUnctions'){
        alert('Correct!')
    } else {
        alert('Close! The answer is functions. Better luck on the next question')
    }
}

function checkQ4() {
    if (q4Text.value == "Functions" || "functions" || "FUNCTIONS" || 'FUnctions'){
        alert('Correct!')
    } else {
        alert('Close! The answer is functions. Better luck on the next question')
    }
}

function checkQ5() {
    if (q5Text.value == "Functions" || "functions" || "FUNCTIONS" || 'FUnctions'){
        alert('Correct!')
    } else {
        alert('Close! The answer is functions. Better luck on the next question')
    }
}

function checkQ6() {
    if (q6Text.value == "Functions" || "functions" || "FUNCTIONS" || 'FUnctions'){
        alert('Correct!')
    } else {
        alert('Close! The answer is functions. Better luck on the next question')
    }
}

    
q1Btn.addEventListener('click', checkQ1)
q2Btn.addEventListener('click', checkQ2)
q3Btn.addEventListener('click', checkQ3)
q4Btn.addEventListener('click', checkQ4)
q5Btn.addEventListener('click', checkQ5)
q6Btn.addEventListener('click', checkQ6)

