// Define variables to track current calculation and result
let currentCalculation = '';
let currentResult = 0;

// Function to append numbers to the current calculation
function appendNumber(number) {
    currentCalculation += number;
    updateDisplay();
}

// Function to append operators to the current calculation
function appendOperator(operator) {
    currentCalculation += operator;
    updateDisplay();
}

// Function to clear the calculator display
function clearDisplay() {
    currentCalculation = '';
    currentResult = 0;
    updateDisplay();
}

// Function to evaluate the current calculation
function evaluate() {
    currentResult = eval(currentCalculation);
    updateDisplay();
}

// Function to update the calculator display with the current result
function updateDisplay() {
    document.getElementById('display').textContent = currentCalculation;
}
