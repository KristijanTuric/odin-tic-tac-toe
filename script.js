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

//#endregion

//#region Cell Buttons

cellOneOne.addEventListener('click', () =>
{
    cellOneOne.textContent = Game.currentPlayer.simbol;
    Gameboard.gameboard[0] = Game.currentPlayer.simbol;
    cellOneOne.setAttribute("disabled", "disabled");
    Game.ChangeTurn();
});

cellOneTwo.addEventListener('click', () =>
{
    cellOneTwo.textContent = Game.currentPlayer.simbol;
    Gameboard.gameboard[1] = Game.currentPlayer.simbol;
    cellOneTwo.setAttribute("disabled", "disabled");
    Game.ChangeTurn();
});

cellOneThree.addEventListener('click', () =>
{
    cellOneThree.textContent = Game.currentPlayer.simbol;
    Gameboard.gameboard[2] = Game.currentPlayer.simbol;
    cellOneThree.setAttribute("disabled", "disabled");
    Game.ChangeTurn();
});

cellTwoOne.addEventListener('click', () =>
{
    cellTwoOne.textContent = Game.currentPlayer.simbol;
    Gameboard.gameboard[3] = Game.currentPlayer.simbol;
    cellTwoOne.setAttribute("disabled", "disabled");
    Game.ChangeTurn();
});

cellTwoTwo.addEventListener('click', () =>
{
    cellTwoTwo.textContent = Game.currentPlayer.simbol;
    Gameboard.gameboard[4] = Game.currentPlayer.simbol;
    cellTwoTwo.setAttribute("disabled", "disabled");
    Game.ChangeTurn();
});

cellTwoThree.addEventListener('click', () =>
{
    cellTwoThree.textContent = Game.currentPlayer.simbol;
    Gameboard.gameboard[5] = Game.currentPlayer.simbol;
    cellTwoThree.setAttribute("disabled", "disabled");
    Game.ChangeTurn();
});

cellThreeOne.addEventListener('click', () =>
{
    cellThreeOne.textContent = Game.currentPlayer.simbol;
    Gameboard.gameboard[6] = Game.currentPlayer.simbol;
    cellThreeOne.setAttribute("disabled", "disabled");
    Game.ChangeTurn();
});

cellThreeTwo.addEventListener('click', () =>
{
    cellThreeTwo.textContent = Game.currentPlayer.simbol;
    Gameboard.gameboard[7] = Game.currentPlayer.simbol;
    cellThreeTwo.setAttribute("disabled", "disabled");
    Game.ChangeTurn();
});

cellThreeThree.addEventListener('click', () =>
{
    cellThreeThree.textContent = Game.currentPlayer.simbol;
    Gameboard.gameboard[8] = Game.currentPlayer.simbol;
    cellThreeThree.setAttribute("disabled", "disabled");
    Game.ChangeTurn();
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
const Player = (name, simbol) =>
{
    this.name = name;
    this.simbol = simbol;

    return {name, simbol};
}

// Game object - control the flow of the game
const Game = (() =>
{
    const firstPlayer = Player("TestOne", "X");
    const secondPlayer = Player("TestTwo", "Y");

    const currentPlayer = firstPlayer;

    // Enter player names and simbols
    const PlayerEntry = () =>
    {

    };

    // Starts the game
    const Play = () =>
    {
        
    };

    // Makes the check to see if we have a winner
    const CheckWinner = () =>
    {
        
    }

    // Change the players turn from one to the other
    const ChangeTurn = () =>
    {
        if (Game.currentPlayer === firstPlayer) Game.currentPlayer = secondPlayer;
        else Game.currentPlayer = firstPlayer;
    };

    return {currentPlayer, ChangeTurn};

})();

// Console testing

console.log(Gameboard.gameboard[7]);
const firstPlayer = Player("Mike", "X");
console.log(firstPlayer.simbol);
// Gameboard.gameboard[3] = 'E';
Gameboard.displayGameboard();
console.log(Game.currentPlayer);