document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.calculator h1');
    let currentInput = '';
    let operator = '';
    let firstOperand = null;
    let waitForSecondOperand = false;

    function clearDisplay() {
        display.textContent = '0';
        currentInput = '';
        operator = '';
        firstOperand = null;
        waitForSecondOperand = false;
    }

    function inputDigit(digit) {
        if (waitForSecondOperand === true) {
            currentInput = digit;
            waitForSecondOperand = false;
        } else {
            currentInput += digit;
        }
        display.textContent = currentInput;
    }

    function inputDecimal() {
        if (!currentInput.includes('.')) {
            currentInput += '.';
            display.textContent = currentInput;
        }
    }

    function handleOperator(nextOperator) {
        const inputValue = parseFloat(currentInput);

        if (operator && waitForSecondOperand) {
            operator = nextOperator;
            return;
        }

        if (firstOperand === null) {
            firstOperand = inputValue;
        } else if (operator) {
            const result = performCalculation[operator](firstOperand, inputValue);
            display.textContent = result;
            firstOperand = result;
        }

        waitForSecondOperand = true;
        operator = nextOperator;
    }

    const performCalculation = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,
        '=': (x, y) => y
    };

    document.querySelector('.calculator').addEventListener('click', function(event) {
        const target = event.target;

        if (!target.matches('.cal')) {
            return;
        }

        if (target.classList.contains('cal1')) {
            clearDisplay();
            return;
        }

        if (target.classList.contains('cal19')) {
            inputDecimal();
            return;
        }

        if (target.classList.contains('cal20')) {
            // Additional functionality for custom button (if needed)
            return;
        }

        if (target.classList.contains('cal4')) {
            handleOperator(target.textContent);
            return;
        }

        if (target.classList.contains('cal18')) {
            handleOperator('=');
            return;
        }

        inputDigit(target.textContent);
    });
});


function handleOperator(nextOperator) {
    const inputValue = parseFloat(currentInput);

    if (operator && waitForSecondOperand) {
        operator = nextOperator;
        return;
    }

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation[operator](firstOperand, inputValue);
        display.textContent = result;
        firstOperand = result;
    }

    waitForSecondOperand = true;
    operator = nextOperator;
}