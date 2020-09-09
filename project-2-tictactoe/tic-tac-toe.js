// HTML Elements
const statusDiv = document.querySelector('#status');
const resetDiv = document.querySelector('#restart');
const cellDivs = document.querySelectorAll('.game-cell');

console.log(cellDivs);
console.log(statusDiv);

// game constants
const xSymbol = '×';
const oSymbol = '○';
// game variables
let gameIsLive = true; 
let xIsNext = true; 
let winner = null;

//functions
const letterSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;
const handleWin = (letter) => {
    gameIsLive = false;
    winner = letter
    if (winner === 'x') {
        statusDiv.innerHTML = `${letterSymbol(winner)} has won!`;
    } else {
        statusDiv.innerHTML= `<span> ${letterSymbol(winner)} has won </span>`
    }
}
const checkGameStatus = () => {
    const topLeft = cellDivs[0].classList[2];
    const topMiddle = cellDivs[1].classList[2];
    const topRight = cellDivs[2].classList[2];
    const middleLeft = cellDivs[3].classList[2];
    const middleMiddle = cellDivs[4].classList[2];
    const middleRight = cellDivs[5].classList[2];
    const bottomLeft = cellDivs[6].classList[2];
    const bottomMiddle = cellDivs[7].classList[2];
    const bottomRight = cellDivs[7].classList[2];

    //check winner
    if(topLeft && topLeft === topMiddle && topLeft === topRight || ){
        handleWin(topLeft);
    } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight){
        handleWin(middleLeft);
    } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight){
        handleWin(bottomLeft);
    } else if (topLeft && topleft === middleLeft && topLeft ===bottomLeft) {
        handleWin(bottomLeft)
    } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle){
        handleWin(topMiddle)
    } else if (topRight && topRight === middleRight && topRight === bottomRight){
        handleWin(topRight)
    } else if (middleMiddle && middleMiddle === topRight && middleMiddle === bottomLeft){
        handleWin(middleMiddle)
    } else if (middleMiddle && middleMiddle === topLeft && middleMiddle === bottomRight){
        handleWin(middleMiddle)
    } else if (topLeft && topMiddle && topRight && middleRight && middleMiddle && middleLeft && bottomRight && bottomLeft && bottomMiddle){
        gameIsLive = false;
        statusDiv.innerHTML = "Game is Tied"
    } else {
        gameIsLive = true; 
        xIsnext= !xIsNext;
        if ( xIsNext) {
            statusDiv.innerHTML = `${xSymbol} is next`
        } else {
            statusDiv.innerHTML = `<span> ${oSymbol} is next`
        }
    }
};

//event Handlers
const handleReset = (e) => {
    console.log(e);
}
const handleCellClick = (e) => {
    const classList = e.target.classList; 

    const location = classList[1];
    if (classList[2] === 'x' || classList[2] === 'o'){
        return;
    }
    if(xIsNext) {
        classList.add('x')
        checkGameStatus()
        xIsNext = !xIsNext;
    } else {
        classList.add('o')
        xIsNext = !xIsNext;
    }
}

//event-listeners
resetDiv.addEventListener('click',handleReset)
for (const cellDiv of cellDivs){
    cellDiv.addEventListener('click',handleCellClick)
}