// Define variables to track game state
let currentPlayer = 'X';
let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Function to handle player moves
function handleMove(row, col) {
    if (gameBoard[row][col] === '') {
        gameBoard[row][col] = currentPlayer;
        document.querySelector(`#board .row:nth-child(${row + 1}) .cell:nth-child(${col + 1})`).textContent = currentPlayer;
        if (checkWin()) {
            displayResult(`${currentPlayer} wins!`);
        } else if (checkDraw()) {
            displayResult("It's a draw!");
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Function to check for a winning condition
function checkWin() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i][0] !== '' && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
            return true;
        }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
        if (gameBoard[0][i] !== '' && gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
            return true;
        }
    }
    // Check diagonals
    if (gameBoard[0][0] !== '' && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
        return true;
    }
    if (gameBoard[0][2] !== '' && gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
        return true;
    }
    return false;
}

// Function to check for a draw condition
function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (gameBoard[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

// Function to display the game result
function displayResult(result) {
    document.getElementById('result').textContent = result;
}

// Function to reset the game
function resetGame() {
    currentPlayer = 'X';
    gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
    document.getElementById('result').textContent = '';
}
