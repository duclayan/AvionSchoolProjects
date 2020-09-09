// HTML Elements
const statusDiv = document.querySelector('#status');
const resetDiv = document.querySelector('#restart');
const cellDivs = document.querySelectorAll('.game-cell');

console.log(cellDivs);
console.log(statusDiv);

// game variables
let gameIsLive = true; 
let xIsNext = true; 

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