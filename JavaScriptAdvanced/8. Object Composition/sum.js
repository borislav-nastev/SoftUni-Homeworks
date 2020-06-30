function solve() {

    let firstNumber = 0;
    let secondNumber = 0;
    let resultContainer;

    const commands = {
        init,
        add,
        subtract
    }

    function init(firstNumberSelector, secondNumberSelector, resultSelector) {

        firstNumber = document.querySelector(firstNumberSelector).value;
        secondNumber = document.querySelector(secondNumberSelector).value;
        resultContainer = document.querySelector(resultSelector);
    }

    function add() {
        const sum = Number(firstNumber) + Number(secondNumber);
        return sum;
    }

    function subtract() {
        const subtract = Number(secondNumber) - Number(firstNumber);
        return subtract;
    }

    return commands;
}

solve();