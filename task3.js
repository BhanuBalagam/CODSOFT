const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const clearButton = document.getElementById('clear');
const calculateButton = document.getElementById('calculate');

let currentInput = '';
let firstOperand = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.textContent));
});

clearButton.addEventListener('click', clearDisplay);
calculateButton.addEventListener('click', calculateResult);

function handleButtonClick(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        if (currentInput !== '') {
            firstOperand = currentInput;
            operator = value;
            currentInput = '';
        }
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    firstOperand = '';
    operator = '';
    updateDisplay();
}

function calculateResult() {
    if (firstOperand !== '' && operator !== '' && currentInput !== '') {
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(currentInput);
        let result = 0;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }

        currentInput = result.toString();
        firstOperand = '';
        operator = '';
        updateDisplay();
    }
}
