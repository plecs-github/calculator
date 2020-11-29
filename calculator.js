const calculator = {
    displayValue: '0',
};

function updateDisplay() {
    const display = document.querySelector(type = "input");
    display.value = calculator.displayValue;
}
updateDisplay();

const keys = document.querySelector('.calculator__buttons');
keys.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('operator')) {
        inputOperator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('clear')) {
        resetCalculator();
        updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay();
});

function inputDigit(digit) {
    const { displayValue } = calculator;
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}
function inputDecimal(dot) {
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}
function inputOperator(operator) {
    if (!calculator.displayValue.includes(operator)) {
        calculator.displayValue += operator;
    }
}

function resetCalculator() {
    calculator.displayValue = '0';
}