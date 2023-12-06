console.log("The javascript is working fine");


//variables that will be used in the game
let buttonClickAudio = new Audio("./musicFiles/click.mp3");
let winningSound = new Audio("./musicFiles/win.mp3");
let buttonClick = new Audio("./musicFiles/buttonClick.mp3");


// function that takes to the main game screen from main menu on button click 
//this function is also used by the win Game screen by the play again button
const playGame = () => {

    buttonClick.play();
    setTimeout(() => {
        window.location.href = "game.html";
    }, 700);
}

//back button on the game screen to go back to the main menu
//this function is also used by the win screen by main menu button
const goBack = () => {

    buttonClick.play();
    setTimeout(() => {
        window.location.href = "index.html";
    }, 700);
    
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

        if( element.innerText === ''){

            buttonClickAudio.play();
            element.innerText = turn;

            if( turn === 'X' ){
                element.style.color = "rgb(137, 105, 47)";
                console.log(turnCount);
            }
            else{
                element.style.color = "green";
                console.log(turnCount);
            }

            //function call for checking if anyone won the game or not
            checkWin();

            if( !isGameOver ){
                //changing the turn using this function
                changeTurn();
                //changing the text after every turn
                changeTurnText();
            }

        }

    })
})


//Winning Page

if( turnCount === 9 ){
    document.getElementsByClassName('winText').innerText = "NoBody won the game";
}


