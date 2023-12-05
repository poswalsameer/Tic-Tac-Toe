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
let turnCount = 1;

//Function that changes the value of turn 
const changeTurn = () => {
    if( turn === 'X' ){
        turn = 'O';
        turnCount++;
    }
    else{
        turn = 'X';
        turnCount++;
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


//Game Winning Logic 
let isGameOver = false;

let winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const checkWin = () => {

    winArr.forEach(e => {
        if (
            box[e[0]].innerText !== "" &&
            box[e[0]].innerText === box[e[1]].innerText &&
            box[e[1]].innerText === box[e[2]].innerText
        ) {
            window.location.href = "win.html";
        }

    });

}

//Logic to add text in the tic tac toe table
Array.from(box).forEach(element => {
    element.addEventListener('click', ()=> {
        element.innerText = turn;
        if( turn === 'X' ){
            element.style.color = "rgb(137, 105, 47)";
            console.log(turnCount);
        }
        else{
            element.style.color = "green";
            console.log(turnCount);
        }

        //checking if anyone won the game or not
        checkWin();

        if( !isGameOver ){
            //changing the turn using this function
            changeTurn();
            //changing the text after every turn
            changeTurnText();
        }

        //checking if anyone won the game or not
        // checkWin();

        //changing the turn
        // changeTurn();
        //changing the turn text
        // changeTurnText();
    })
})


//Winning Page

if( turnCount === 9 ){
    document.getElementsByClassName('winText').innerText = "NoBody won the game";
}


