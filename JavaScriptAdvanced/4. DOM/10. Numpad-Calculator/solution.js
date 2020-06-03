function solve() {

    const operands = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };

    const elements = {
        clearBtn: document.querySelector('.clear'),
        expressionField: document.getElementById('expressionOutput'),
        resultField: document.getElementById('resultOutput'),
        digitButtons: document.querySelectorAll('.keys button'),
        calculator: document.getElementById('calculator'),
    };

    let result = 0;
    let num1 = '';
    let num2 = '';
    let operand = '';

    elements.calculator.addEventListener('click', calc);

    function calc(event) {

        let currentValue = event.target.value;

        if (Number(currentValue) || currentValue === '.' || currentValue == 0) {

            if (!operand) {
                num1 += currentValue;
                elements.expressionField.textContent += currentValue;

            } else {
                num2 += currentValue;
                elements.expressionField.textContent += currentValue;
            }

        } else if (operands.hasOwnProperty(currentValue)) {

            operand += currentValue;
            elements.expressionField.textContent += ` ${currentValue} `;

        } else if (currentValue === '=') {

            if (num1 && num2 && operand) {
                result = sum(num1, operand, num2);

            } else {
                result = 'NaN';
            }

            elements.resultField.textContent = result;
            elements.digitButtons.forEach(button => button.disabled = true);

        } else if (currentValue === 'Clear') {

            elements.digitButtons.forEach(button => button.disabled = false);
            elements.expressionField.textContent = null;
            elements.resultField.textContent = null;
            num1 = '';
            num2 = '';
            operand = '';

        }
    }

    function sum(num1, operand, num2) {
        let result = operands[operand](Number(num1), Number(num2));
        return result;
    }
}