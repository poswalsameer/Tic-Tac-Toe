console.log("The javascript is working fine");

// function that takes to the main game screen from main menu on button click
const playGame = () => {
    window.location.href = "game.html";
}

// function that takes us back to the main menu on button click
const backToMenu = () => {
    window.location.href = "index.html";
}

//back button on the game screen to go back to the main menu
const goBack = () => {
    window.location.href = "index.html";
}

const playAgain = () => {
    window.location.href = 'game.html';
}

const box = document.getElementsByClassName('box');


//variable used to store the value of turn
let turn = 'X';

//Function that changes the value of turn 
const changeTurn = () => {
    if( turn === 'X' ){
        turn = 'O';
    }
    else{
        turn = 'X';
    }
}

//Function that changes the text in UI after every turn 
const changeTurnText = () => {
    document.getElementsByClassName('turnText')[0].innerText = turn;

    if( turn === 'X' ){
        document.getElementsByClassName('turnText')[0].style.color = "rgb(86, 60, 10)";
    }
    else{
        document.getElementsByClassName('turnText')[0].style.color = "green";
    }
}



//Logic to add text in the tic tac toe table
Array.from(box).forEach(element => {
    element.addEventListener('click', ()=> {
        element.innerText = turn;
        if( turn === 'X' ){
            element.style.color = "rgb(137, 105, 47)";
        }
        else{
            element.style.color = "green";
        }
        changeTurn();
        console.log("change turn is working");
        changeTurnText();
        // if()
    })
})






