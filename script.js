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

cellOneOne.addEventListener('click', () =>
{
    cellOneOne.textContent = 'F';
});


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

})();

// Console testing
console.log(Gameboard.gameboard[7]);
const firstPlayer = Player("Mike", "X");
console.log(firstPlayer.simbol);
// Gameboard.gameboard[3] = 'E';
Gameboard.displayGameboard();