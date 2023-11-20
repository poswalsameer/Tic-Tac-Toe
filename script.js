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
