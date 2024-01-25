let currentInput = '';
let operator = '';
let firstOperand = null;

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function setOperator(op) {
    if (currentInput !== '') {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
            currentInput = '';
            operator = op;
        } else {
            calculate();
            operator = op;
        }
    }
}

function calculate() {
    if (firstOperand !== null && currentInput !== '') {
        switch (operator) {
            case '+':
                currentInput = (firstOperand + parseFloat(currentInput)).toString();
                break;
            case '-':
                currentInput = (firstOperand - parseFloat(currentInput)).toString();
                break;
            case '*':
                currentInput = (firstOperand * parseFloat(currentInput)).toString();
                break;
            case '/':
                currentInput = (firstOperand / parseFloat(currentInput)).toString();
                break;
            default:
                break;
        }
        operator = '';
        firstOperand = null;
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').textContent = currentInput || '0';
}
