const formDiv = document.getElementById("form");
const submitButton = document.getElementById("submitButton")
let nameValue = document.getElementById("nameInput");
const gameDiv = document.getElementById("game")

function greetUser() {
    let userName = prompt("Hello, please enter your name: ")
    alert (`Hello ${userName}`)
    
}

function startGame() {
    greetUser()
}

startGame()

const formSubmit = function(e) {
    console.log("click")
    submitButton.addEventListener("click", formSubmit)
    // startGame = function(){
}

nameValue=document.getElementById("nameInput")

// formDiv.style.display="none"

console.log(nameValue)

// startGame();
gameDiv.style.display="block"

    // let nameHello = alert
    //     prompt("Type hello")
    
    // let questionOne  = ("Type Hello")

    let verify = function (){
        
        if (answerOne == Hello || HELLO || hello || HEllo){
        alert("Correct!")
        }

        else {
        alert("Close! The correct answer is hello")    
        }
    }

   

    // let nameBye = alert
    // prompt("Type Bye")
    // let questionThree  = ("Type Functions")
    // let where = function() {
        
    //     if (where == Functions || FUNCTIONS || functions || FUnctions){
    //     alert("Correct!")
    //     }
    //     else {
    //     alert("Close! The correct answer is bye")    
    //     }
    // }

// DOM
let q1Text = document.getElementById('questionOne')
let q1Btn = document.querySelector('#submitQ1')

function checkQ1() {
    if (q1Text.value === "Hello") {
        alert('Correct')
    } else {
        alert('Incorrect')
    }
}


q1Btn.addEventListener('click', checkQ1)



