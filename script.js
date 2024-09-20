//#region Getting elements from the document

const cellOneOne = document.getElementById("oneone");
const cellOneTwo = document.getElementById("onetwo");
const cellOneThree = document.getElementById("onethree");

const cellTwoOne = document.getElementById("twoone");
const cellTwoTwo = document.getElementById("twotwo");
const cellTwoThree = document.getElementById("twothree");

const cellThreeOne = document.getElementById("threeone");
const cellThreeTwo = document.getElementById("threetwo");
const cellThreeThree = document.getElementById("threethree");

const allCells = [cellOneOne, cellOneTwo, cellOneThree, cellTwoOne, cellTwoTwo, cellTwoThree, cellThreeOne, cellThreeTwo, cellThreeThree];

const winnerDisplay = document.getElementById("winner");

const winnerDialog = document.getElementById("winnerDialog");
const winnerLabel = document.getElementById("winnerLabel");
const resetBtn = document.getElementById("resetBtn");

const playerTurn = document.getElementById("playerTurn");

// Player scores
const scoreFirstPlayer = document.getElementById("scoreFirstPlayer");
const scoreSecondPlayer = document.getElementById("scoreSecondPlayer");

var game = null;
var movesPlayed = 0;


// When the webpage loads, show them a dialog for entering player names
window.onload = function () {
    newGameDialog.showModal();
}
//#endregion

//#region Cell Buttons

cellOneOne.addEventListener('click', () =>
{
    cellOneOne.textContent = game.currentPlayer.simbol;
    Gameboard.gameboard[0] = game.currentPlayer.simbol;
    cellOneOne.setAttribute("disabled", "disabled");
    game.checkWinner();
    game.changeTurn();
});

cellOneTwo.addEventListener('click', () =>
{
    cellOneTwo.textContent = game.currentPlayer.simbol;
    Gameboard.gameboard[1] = game.currentPlayer.simbol;
    cellOneTwo.setAttribute("disabled", "disabled");
    game.checkWinner();
    game.changeTurn();
});

cellOneThree.addEventListener('click', () =>
{
    cellOneThree.textContent = game.currentPlayer.simbol;
    Gameboard.gameboard[2] = game.currentPlayer.simbol;
    cellOneThree.setAttribute("disabled", "disabled");
    game.checkWinner();
    game.changeTurn();
});

cellTwoOne.addEventListener('click', () =>
{
    cellTwoOne.textContent = game.currentPlayer.simbol;
    Gameboard.gameboard[3] = game.currentPlayer.simbol;
    cellTwoOne.setAttribute("disabled", "disabled");
    game.checkWinner();
    game.changeTurn();
});

cellTwoTwo.addEventListener('click', () =>
{
    cellTwoTwo.textContent = game.currentPlayer.simbol;
    Gameboard.gameboard[4] = game.currentPlayer.simbol;
    cellTwoTwo.setAttribute("disabled", "disabled");
    game.checkWinner();
    game.changeTurn();
});

cellTwoThree.addEventListener('click', () =>
{
    cellTwoThree.textContent = game.currentPlayer.simbol;
    Gameboard.gameboard[5] = game.currentPlayer.simbol;
    cellTwoThree.setAttribute("disabled", "disabled");
    game.checkWinner();
    game.changeTurn();
});

cellThreeOne.addEventListener('click', () =>
{
    cellThreeOne.textContent = game.currentPlayer.simbol;
    Gameboard.gameboard[6] = game.currentPlayer.simbol;
    cellThreeOne.setAttribute("disabled", "disabled");
    game.checkWinner();
    game.changeTurn();
});

cellThreeTwo.addEventListener('click', () =>
{
    cellThreeTwo.textContent = game.currentPlayer.simbol;
    Gameboard.gameboard[7] = game.currentPlayer.simbol;
    cellThreeTwo.setAttribute("disabled", "disabled");
    game.checkWinner();
    game.changeTurn();
});

cellThreeThree.addEventListener('click', () =>
{
    cellThreeThree.textContent = game.currentPlayer.simbol;
    Gameboard.gameboard[8] = game.currentPlayer.simbol;
    cellThreeThree.setAttribute("disabled", "disabled");
    game.checkWinner();
    game.changeTurn();
});
//#endregion

// Gameboard object which will store the table for X's and O's
const Gameboard = (() =>
{
    var gameboard = [];

    // A function to display the current content of the array to the screen
    const displayGameboard = () =>
    {
        cellOneOne.textContent = gameboard[0];
        cellOneTwo.textContent = gameboard[1];
        cellOneThree.textContent = gameboard[2];

        cellTwoOne.textContent = gameboard[3];
        cellTwoTwo.textContent = gameboard[4];
        cellTwoThree.textContent = gameboard[5];

        cellThreeOne.textContent = gameboard[6];
        cellThreeTwo.textContent = gameboard[7];
        cellThreeThree.textContent = gameboard[8];
    };

    return {gameboard, displayGameboard};
})();

// Player object
function createPlayer (name, simbol)
{
    this.name = name;
    this.simbol = simbol;
    this.score = 0;

    return {name, simbol, score};
}

// Game object - control the flow of the game
function createGame (firstPlayer, secondPlayer)
{
    this.firstPlayer = firstPlayer;
    this.secondPlayer = secondPlayer;

    var currentPlayer = firstPlayer;

    // Makes the check to see if we have a winner
    // Needs to be checked after every move
    const checkWinner = () =>
    {
        movesPlayed += 1;

        // Rows
        if (Gameboard.gameboard[0] != undefined && Gameboard.gameboard[0] === Gameboard.gameboard[1] && Gameboard.gameboard[1] === Gameboard.gameboard[2]) displayWinner(getPlayerFromSimbol(Gameboard.gameboard[2]));
        if (Gameboard.gameboard[3] != undefined && Gameboard.gameboard[3] === Gameboard.gameboard[4] && Gameboard.gameboard[4] === Gameboard.gameboard[5]) displayWinner(getPlayerFromSimbol(Gameboard.gameboard[5]));
        if (Gameboard.gameboard[6] != undefined && Gameboard.gameboard[6] === Gameboard.gameboard[7] && Gameboard.gameboard[7] === Gameboard.gameboard[8]) displayWinner(getPlayerFromSimbol(Gameboard.gameboard[8]));

        // Columns
        if (Gameboard.gameboard[0] != undefined && Gameboard.gameboard[0] === Gameboard.gameboard[3] && Gameboard.gameboard[3] === Gameboard.gameboard[6]) displayWinner(getPlayerFromSimbol(Gameboard.gameboard[6]));
        if (Gameboard.gameboard[1] != undefined && Gameboard.gameboard[1] === Gameboard.gameboard[4] && Gameboard.gameboard[4] === Gameboard.gameboard[7]) displayWinner(getPlayerFromSimbol(Gameboard.gameboard[7]));
        if (Gameboard.gameboard[2] != undefined && Gameboard.gameboard[2] === Gameboard.gameboard[5] && Gameboard.gameboard[5] === Gameboard.gameboard[8]) displayWinner(getPlayerFromSimbol(Gameboard.gameboard[8]));

        // Diagonals
        if (Gameboard.gameboard[0] != undefined && Gameboard.gameboard[0] === Gameboard.gameboard[4] && Gameboard.gameboard[4] === Gameboard.gameboard[8]) displayWinner(getPlayerFromSimbol(Gameboard.gameboard[8]));
        if (Gameboard.gameboard[2] != undefined && Gameboard.gameboard[2] === Gameboard.gameboard[4] && Gameboard.gameboard[4] === Gameboard.gameboard[6]) displayWinner(getPlayerFromSimbol(Gameboard.gameboard[6]));

        
        if (movesPlayed === 9) displayWinner("Draw");
    }

    // Change the players turn from one to the other
    const changeTurn = () =>
    {
        if (game.currentPlayer === firstPlayer) game.currentPlayer = secondPlayer;
        else game.currentPlayer = firstPlayer;
        playerTurn.textContent = game.currentPlayer.name + " - " + game.currentPlayer.simbol;
    };

    // Returns the player name, depending on the simbol passed in
    const getPlayerFromSimbol = (simbol) => 
    {
        if (simbol === firstPlayer.simbol) return firstPlayer.name;
        else return secondPlayer.name;
    };

    // displays the winner
    const displayWinner = (name) =>
    {
        movesPlayed = 0;

        if (name === "Draw") winnerLabel.textContent = "It is a DRAW";
        else
        {
            winnerLabel.textContent = name + " is the winner";
        }

        // Update the score
        if (name === this.firstPlayer.name) this.firstPlayer.score += 1;
        else if (name === this.secondPlayer.name) this.secondPlayer.score += 1;

        game.updateScoreDisplay();

        winnerDialog.showModal();
    };

    // Returns the name of the first player
    const getFirstPlayerName = () => 
    {
        return this.firstPlayer.name;
    }

    const getSecondPlayerName = () => 
    {
        return this.secondPlayer.name;
    }

    // Update score display
    const updateScoreDisplay = () =>
    {
        scoreFirstPlayer.textContent = this.firstPlayer.name + ": " + this.firstPlayer.score;
        scoreSecondPlayer.textContent = this.secondPlayer.name + ": " + this.secondPlayer.score;
    }

    return {currentPlayer, changeTurn, checkWinner, movesPlayed, getFirstPlayerName, getSecondPlayerName, updateScoreDisplay};

};

//#region New Game

const newGameDialog = document.getElementById("newGameDialog");
const firstNameInput = document.getElementById("firstNameInput");
const secondNameInput = document.getElementById("secondNameInput");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener('click', (event) => 
{
    // Prevents the button from refreshing the page upon clicking it
    event.preventDefault();

    if (firstNameInput.value == "" || secondNameInput.value == "")
    {
        newGameDialog.style.borderColor = "red";
    }
    else
    {
        const firstPlayer = createPlayer(firstNameInput.value, "X");
        const secondPlayer = createPlayer(secondNameInput.value, "O");
        game = createGame(firstPlayer, secondPlayer);
        playerTurn.textContent = game.getFirstPlayerName() + " - " + "X"; 
        game.updateScoreDisplay();
        newGameDialog.close();
    }

});

//#endregion

//#region Winner Display

resetBtn.addEventListener('click', (event) => 
{
    event.preventDefault();

    // Reset the gameboard and table display
    for (let i = 0; i < 9; i++) {
        Gameboard.gameboard[i] = null;
        allCells[i].textContent = null;
        if (allCells[i].hasAttribute("disabled")) allCells[i].removeAttribute("disabled");
    }

    winnerDialog.close();
});

//#endregion